<template>
  <div
    :is="layout"
    :post="post"
  />
</template>

<script>
import { mapGetters } from 'vuex';

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
    AboutUs: () => import('~/pages/about-us'),
    PaymentMethods: () => import('~/pages/payment-methods'),
    PrivacyPolicy: () => import('~/pages/privacy-policy'),
    TermsAndConditions: () => import('~/pages/terms-and-conditions'),
    Error: () => import('~/pages/error'),
  },

  head() {
    if (this.layout === 'CategoryTerm') return { title: this.post.name };
    return { title: this.post.title || this.post.description };
  },

  computed: {
    ...mapGetters('static', ['links']),
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  async asyncData({ app, route, store }) {
    const slug = slugFromPath(route.path);

    const dataRequests = [fetchMenus(app, store), fetchShared(app, store)];
    const staticPage = Object.values(store.state['static-pages']).find(({ url }) => url === route.path);

    if (staticPage) {
      await Promise.all(dataRequests);
      return { layout: staticPage.component, post: { title: staticPage.title } };
    }

    dataRequests.unshift(app.$q('post', { slug }));
    const [{ post }] = await Promise.all(dataRequests);

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
