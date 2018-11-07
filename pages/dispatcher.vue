<template>
  <div
    :is="layout"
    :post="post"
  />
</template>

<script>
function slugFromPath(path) {
  if (path === '/') return 'home';
  if (path === '/us') return 'home';
  return path.slice(1);
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
  },

  head() {
    return {
      title: this.post.title || this.post.description,
    };
  },

  async asyncData({ app, route, store }) {
    const slug = slugFromPath(route.path);
    const [{ post }] = await Promise.all([app.$q('post', { slug }), fetchMenus(app, store), fetchShared(app, store)]);
    return { layout: post.__typename, post };
  },
};
</script>
