export default async ({
  app, req, redirect, store,
}) => {
  const path = process.server ? req.url : window.location.pathname;
  const { locale } = app.i18n;

  if (path.startsWith(`/${locale}/sessions/`)) return;

  const { data, errors } = await app.$query('currentUser');
  if (errors.length > 0) {
    redirect(`/${locale}/sessions/login`);
  } else {
    store.commit('auth/setCurrentUser', data.user);
  }
};
