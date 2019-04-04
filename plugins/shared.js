function contextPath(store) {
  return function (page) {
    const locale = store.getters['context/locale'];
    const slug = page && page.charAt(0) === '/' ? page.substr(1) : page;
    return `/${locale}/${slug}`;
  };
}

function faqUrl(store) {
  const locale = store.getters['context/locale'];
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
  inject('faqUrl', faqUrl(store));
  inject('crumbs', crumbs(store));
  inject('staticHtmlContent', staticHtmlContent(store));
};
