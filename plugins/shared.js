function contextPath({ state }) {
  return function (page) {
    const { locale } = state.i18n;
    const slug = page && page.charAt(0) === '/' ? page.substr(1) : page;
    return `/${locale}/${slug}`;
  };
}

function staticHtmlContent({ state }) {
  return function (pagename) {
    const lang = state.i18n.locale.substr(0, 2);
    return require(`~/assets/locales/${pagename}/${lang}.html`); // eslint-disable-line
  };
}

export default ({ store }, inject) => {
  inject('contextPath', contextPath(store));
  inject('staticHtmlContent', staticHtmlContent(store));
};
