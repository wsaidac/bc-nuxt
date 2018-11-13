/* eslint-disable */
export default async ({
  app, store,
  }) => {
  const { data, errors } = await app.$query('currentUser');
  if (data.user) store.commit('auth/setCurrentUser', data.user);

  console.log(" =====");
  console.log(data);
  console.log(" =====");
};
