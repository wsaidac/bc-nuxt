import Vue from 'vue';

function log(message) {
  if (process.env.GTM_DEBUG) console.log('[GTM]', message); // eslint-disable-line no-console
}

function page() {
  const data = {
    event: 'pageView',
    url: window.location.href,
    path: window.location.pathname,
    referrer: document.referrer,
    title: document.title,
  };
  log(data);
  window.dataLayer.push(data);
  return this;
}

function track(event, properties) {
  const data = Object.assign({ event }, properties);
  log(data);
  window.dataLayer.push(data);
  return this;
}

function injectBaseTag(gtmId) {
  log('injecting base tag');
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.querySelector('head').appendChild(script);
  window.gtmInitialized = true;
}

function initilialize(gtmId) {
  if (window.gtmInitialized) return;
  if (navigator.userAgent.match(/Google Page Speed Insights/)) return;
  injectBaseTag(gtmId);
}

export default ({ store, app }, inject) => {
  initilialize(store.getters['shared/gtmId']);

  inject('page', page);
  inject('track', track);
  app.router.afterEach((to, from) => {
    Vue.nextTick(() => {
      app.$page();
    });
  });
};
