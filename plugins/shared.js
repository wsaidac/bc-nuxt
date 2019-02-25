function contextPath(store) {
  return function (page) {
    const locale = store.getters['context/locale'];
    const slug = page && page.charAt(0) === '/' ? page.substr(1) : page;
    return `/${locale}/${slug}`;
  };
}

function crumbs(store) {
  return function (label, additionalCrumbs) {
    const homeTitle = store.getters['shared/homeTitle'];
    return [{ url: '/', label: 'Home', title: homeTitle }, ...(additionalCrumbs || []), { label }];
  };
}

function staticHtmlContent(store) {
  return function (pagename) {
    const lang = store.getters['context/language'];
    return require(`~/assets/locales/${pagename}/${lang}.html`); // eslint-disable-line
  };
}

export default ({ store }, inject) => {
  inject('contextPath', contextPath(store));
  inject('crumbs', crumbs(store));
  inject('staticHtmlContent', staticHtmlContent(store));
};
