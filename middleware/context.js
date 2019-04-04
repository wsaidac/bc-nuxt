async function fetchFooterMenu(app, store, error) {
  try {
    const footerMenu = await app.$q('footer');

    if (!footerMenu) {
      error({ statusCode: 404, message: app.i18n.t('general.critical_error') });
    } else {
      store.commit('menus/setFooter', footerMenu);
    }
  } catch ({ statusCode, message }) {
    error({ statusCode, message });
  }
}

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
  store, app, redirect, error, route,
}) => {
  if (!process.server && route.path.substring(1).startsWith(app.i18n.locale)) return null;

  const urlPaths = route.path.split('/');
  const locale = urlPaths[1];

  // if there is no locale slug in the url, redirect to default locale
  if (!locale) {
    return redirect(301, `/${app.i18n.defaultLocale}/`);
  }

  // if the locale has uppercase letters, redirect to lowercase locale
  // ex /en-US/ will redirect to /en-us/ for SEO purposes
  if (locale !== locale.toLowerCase()) {
    urlPaths.splice(1, 1, locale.toLowerCase());

    return redirect(301, urlPaths.join('/'));
  }

  store.dispatch("context/changeContext", locale);

  return Promise.all([fetchMenus(app, store, error), fetchFooterMenu(app, store, error), fetchShared(app, store, error)]);
};
