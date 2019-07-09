import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { setContext } from 'apollo-link-context';
import { partial } from 'lodash';
// import queries from '../graphql/queries';
// import mutations from '../graphql/mutations';

const queries = require('~/graphql/queries').default;
const mutations = require('~/graphql/mutations').default;

const docs = {
  query: queries,
  mutate: mutations,
};

const extendedHeadersStoreLocation = 'extendedGraphqlHeaders';

const makeFetch = async (uri, options) => {
  const response = await fetch(uri, options);
  return response;
};

const buildHttpLink = uri => createHttpLink({
  uri,
  fetch: makeFetch,
});

const buildBatchLink = uri => new BatchHttpLink({
  uri,
  fetch: makeFetch,
  batchInterval: 10,
});

const selectSingleLink = env => ApolloLink.split(
  () => process.server,
  buildHttpLink(env.API_SERVER),
  buildHttpLink(env.API_BROWSER),
);

const selectBatchLink = env => ApolloLink.split(
  () => process.server,
  buildBatchLink(env.API_SERVER),
  buildBatchLink(env.API_BROWSER),
);

const batchOrSingleLink = env => ApolloLink.split(
  operation => operation.getContext().batch,
  selectBatchLink(env),
  selectSingleLink(env),
);

const setHeadersLink = store => setContext((_, {
  headers,
}) => {
  const extendedHeaders = store.getters[extendedHeadersStoreLocation];

  return {
    headers: {
      ...headers,
      ...extendedHeaders,
    },
  };
});

function createClient({ store, env }) {
  const client = new ApolloClient({
    link: ApolloLink.from([setHeadersLink(store), batchOrSingleLink(env)]),
    cache: new InMemoryCache(),
  });

  async function exec(type, name, variables = {}, addOptions) {
    const requestType = type === 'mutate' ? 'mutation' : type;
    try {
      const { data } = await client[type]({ // type: mutate, query
        [requestType]: docs[type][name], // correctType: mutation, query
        fetchPolicy: 'no-cache',
        variables,
        context: addOptions,
      });
      return {
        data,
        errors: [],
      };
    } catch (errors) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(errors); // eslint-disable-line
      }
      return ({
        data: {},
        errors: errors.graphQLErrors,
      });
    }
  }

  async function call(type, config, variables, options) {
    const results = await exec(type, config, variables, options);

    this.$graphQLErrors = results.errors;

    const rootError = results.errors.find(error => error.path === undefined);
    this.$graphQLError = rootError && rootError.message;

    if (results.errors && this.$v) {
      this.$v.$touch();
      this.$v.$reset();
    }
    return results;
  }

  return {
    query: partial(call, 'query'),
    mutation: partial(call, 'mutate'),
  };
}

export default ({
  store,
  env,
}, inject) => {
  const {
    query,
    mutation,
  } = createClient({
    store,
    env,
  });

  inject('query', query);
  inject('mutation', mutation);
};
