async function fetchMenus(app, store) {
  const { menus } = await app.$q('menus', { slug: 'main' });
  store.commit('menus/setMain', menus.nodes[0]);
}

async function fetchShared(app, store) {
  const { post } = await app.$q('shared');
  store.commit('shared/setFooter', post.footer);
  store.commit('shared/setHeader', post.header);
  store.commit('shared/setCustomerService', post.customerService);
  store.commit('shared/setInstantDelivery', post.instantDelivery);
  store.commit('shared/setPaymentMethods', post.paymentMethods);
  store.commit('shared/setUsps', post.usps);
}

export default ({ req, store, app }) => {
  if (!process.server) return;
  let label = req.headers.host.split('.').slice(-2)[0];
  const contextSlug = req.url.split('/')[1];
  const [language, country] = contextSlug.split('-');

  if (label.startsWith('localhost')) {
    label = 'rapido';
  }

  store.commit('context/setCurrentLabel', label);
  store.commit('context/setCurrentCountry', country);
  store.commit('context/setCurrentLanguage', language);

  Promise.all([fetchMenus(app, store), fetchShared(app, store)]);
};
