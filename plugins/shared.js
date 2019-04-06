function contextPath({ state }) {
  return function (page) {
    const { locale } = state.i18n;
    const slug = page && page.charAt(0) === '/' ? page.substr(1) : page;
    return `/${locale}/${slug}`;
  };
}

function faqUrl({ state }) {
  const { locale } = state.i18n;
  const links = {
    'en-us': 'https://faq.rapido.com/hc/en-us',
    'fr-be': 'https://faq.rapido.com/hc/fr',
    'de-at': 'https://faq.rapido.com/hc/de',
  };
  if (links[locale]) {
    return links[locale];
  }
  return links['en-us'];
}

function crumbs({ state }) {
  return function (label, additionalCrumbs) {
    const homeTitle = { state }.getters['shared/homeTitle'];
    return [{ url: '/', label: 'Home', title: homeTitle }, ...(additionalCrumbs || []), { label }];
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
  inject('faqUrl', faqUrl(store));
  inject('crumbs', crumbs(store));
  inject('staticHtmlContent', staticHtmlContent(store));
};
