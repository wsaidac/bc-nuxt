const mutations = {};

((resolver) => {
  resolver.keys().forEach((gql) => {
    const name = gql.replace('./', '').replace('.graphql', '');
    mutations[name] = resolver(gql);
  });
})(require.context('./mutations', true, /.*\.graphql/));

export default mutations;
