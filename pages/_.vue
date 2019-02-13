<template>
  <div
    :is="layout"
    :post="post"
  />
</template>

<script>
import { mapGetters } from 'vuex';

function slugFromPath(path, contextSlug) {
  if (path === `/${contextSlug}/`) return 'home';
  return path.replace(`${contextSlug}/`, '');
}

export default {
  components: {
    Home: () => import('~/pages-dynamic/home'),
    CategoryTerm: () => import('~/pages-dynamic/category'),
    Product: () => import('~/pages-dynamic/product'),
    Error: () => import('~/pages-dynamic/error'),
  },

  head() {
    return {
      title: this.post.title || this.post.description,
    };
  },

  computed: {
    ...mapGetters('static', ['links']),
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  async asyncData({ app, route, store }) {
    const contextSlug = store.getters['context/contextSlug'];
    const slug = slugFromPath(route.path, contextSlug);

    const { post } = await app.$q('post', { slug });
    if (post === null) {
      return {
        layout: 'Error',
        post: 'some interesting info',
      };
    }

    /* prettier-ignore */
    post.__typename = post.__typename === 'CmsProduct' ? 'Product' : post.__typename;
    return { layout: post.__typename, post };
  },
};
</script>
