async function fetchMenus(app, store) {
  const { menus } = await app.$q('menus', { slug: 'main' });
  store.commit('menus/setMain', menus.nodes[0]);
}

export default async ({ app, store }) => {
  await fetchMenus(app, store);
};
