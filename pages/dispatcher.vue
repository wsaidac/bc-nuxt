<template>
  <div
    :is="layout"
    :post="post"
  />
</template>

<script>
function slugFromPath(path) {
  if (path === '/' || path === `/${process.env.CMS_COUNTRY}`) return 'home';
  return path.replace(`${process.env.CMS_COUNTRY}/`, '');
}

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

export default {
  components: {
    Home: () => import('~/pages/home'),
    CategoryTerm: () => import('~/pages/category'),
    Product: () => import('~/pages/product'),
    Error: () => import('~/pages/error'),
  },

  head() {
    return {
      title: this.post.title || this.post.description,
    };
  },

  async asyncData({ app, route, store }) {
    const slug = slugFromPath(route.path);
    const [{ post }] = await Promise.all([
      app.$q('post', { slug }),
      fetchMenus(app, store),
      fetchShared(app, store),
    ]);
    if (post === null) {
      return {
        layout: 'Error',
        post: 'some interesting info',
      };
    }
    post.__typename = post.__typename === 'CmsProduct' ? 'Product' : post.__typename;
    return { layout: post.__typename, post };
  },
};
</script>
