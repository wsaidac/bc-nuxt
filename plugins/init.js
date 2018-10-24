async function fetchMenus(app, store) {
  const { menus } = await app.$q('menus', { slug: 'main' });
  store.commit('menus/setMain', menus.nodes[0]);
}

async function fetchShared(app, store) {
  const { post } = await app.$q('post', { slug: 'home' });
  store.commit('shared/setFooter', post.footer);
  store.commit('shared/setHeader', post.header);
  store.commit('shared/setCustomerService', post.customerService);
  store.commit('shared/setInstantDelivery', post.instantDelivery);
  store.commit('shared/setPaymentMethods', post.paymentMethods);
  store.commit('shared/setUsps', post.usps);
}

export default async ({ app, store }) => {
  await Promise.all([fetchMenus(app, store), fetchShared(app, store)]);
};
