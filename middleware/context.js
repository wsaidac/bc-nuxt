async function fetchMenus(app, store, error) {
  try {
    const { menus } = await app.$q('menus', { slug: 'main' });

    if (!menus) {
      error({ statusCode: 404, message: app.i18n.t('general.critical_error') });
    } else {
      store.commit('menus/setMain', menus.nodes[0]);
    }
  } catch ({ statusCode, message }) {
    error({ statusCode, message });
  }
}

async function fetchShared(app, store, error) {
  try {
    const { post } = await app.$q('shared');

    if (!post) {
      error({ statusCode: 404, message: app.i18n.t('general.critical_error') });
    } else {
      store.commit('shared/setHomeTitle', post.title);
      store.commit('shared/setFooter', post.footer);
      store.commit('shared/setHeader', post.header);
      store.commit('shared/setCustomerService', post.customerService);
      store.commit('shared/setInstantDelivery', post.instantDelivery);
      store.commit('shared/setPaymentMethods', post.paymentMethods);
    }

    store.commit('shared/setUsps', post.usps);
  } catch ({ statusCode, message }) {
    error({ statusCode, message });
  }
}

export default ({
  req, store, app, redirect, error,
}) => {
  if (!process.server) return [];

  const urlPaths = req.url.split('/');
  const locale = urlPaths[1];
  const [language, country] = locale.split('-');

  // if the locale slug in the url is not supported for this merchant
  // redirect to the homepage with the default locale slug
  if (!app.i18n.locales.find(el => el.code.toUpperCase() === locale.toUpperCase())) {
    return redirect(301, `/${app.i18n.defaultLocale}/`);
  }

  // if the locale has uppercase letters, redirect to lowercase locale
  // ex /en-US will redirect to /en-us for SEO purposes
  if (locale !== locale.toLowerCase()) {
    urlPaths.splice(1, 1, locale.toLowerCase());

    return redirect(301, urlPaths.join('/'));
  }

  const label = 'rapido';

  store.commit('context/setCurrentLabel', label);
  store.commit('context/setCurrentCountry', country);
  store.commit('context/setCurrentLanguage', language);

  return Promise.all([fetchMenus(app, store, error), fetchShared(app, store, error)]);
};
