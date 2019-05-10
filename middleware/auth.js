export default async ({
  app, redirect, store,
}) => {
  const { locale } = app.i18n;

  const { data, errors } = await app.$query('currentUser');
  if (errors.length > 0) {
    redirect(`/${locale}/sessions/login`);
  } else {
    store.commit('auth/setCurrentUser', data.user);
  }
};
