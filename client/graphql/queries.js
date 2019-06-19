const queries = {};

((resolver) => {
  resolver.keys().forEach((gql) => {
    const name = gql.replace('./', '').replace('.graphql', '');
    queries[name] = resolver(gql);
  });
})(require.context('./queries', true, /.*\.graphql/));

export default queries;
