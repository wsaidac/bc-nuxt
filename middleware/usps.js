export default async ({ app, store }) => {
  const { post } = await app.$q('usps');
  store.commit('shared/setUsps', post.usps);
};
