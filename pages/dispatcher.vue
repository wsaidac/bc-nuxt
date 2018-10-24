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

  async asyncData({ app, route }) {
    const slug = slugFromPath(route.path);
    const { post } = await app.$q('post', { slug });
    return { layout: post.__typename, post };
  },
};
</script>
