export default async ({ app, store, route }) => {
  const slug = route.path.split('/')[2];
  const userPages = ['sessions', 'account'];
  if (userPages.includes(slug)) {
    const { post } = await app.$q('usps');
    store.commit('shared/setUsps', post.usps);
  }
};
