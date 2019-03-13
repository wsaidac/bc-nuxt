async function fetchMenus(app, store) {
  const { menus } = await app.$q('menus', { slug: 'main' });
  if (!menus) return;
  store.commit('menus/setMain', menus.nodes[0]);
}

async function fetchShared(app, store) {
  const { post } = await app.$q('shared');
  if (!post) return;
  store.commit('shared/setHomeTitle', post.title);
  store.commit('shared/setFooter', post.footer);
  store.commit('shared/setHeader', post.header);
  store.commit('shared/setCustomerService', post.customerService);
  store.commit('shared/setInstantDelivery', post.instantDelivery);
  store.commit('shared/setPaymentMethods', post.paymentMethods);
  store.commit('shared/setUsps', post.usps);
}

export default ({
  req, store, app, redirect,
}) => {
  if (!process.server) return [];

  const locale = req.url.split('/')[1];
  const [language, country] = locale.split('-');

  if (!language || !country) return redirect('/en-US/');

  // let label = req.headers.host.split('.').slice(-2)[0];
  // if (label.startsWith('localhost')) {
  const label = 'rapido';
  // }

  store.commit('context/setCurrentLabel', label);
  store.commit('context/setCurrentCountry', country);
  store.commit('context/setCurrentLanguage', language);

  return Promise.all([fetchMenus(app, store), fetchShared(app, store)]);
};
