<template>
  <div
    :is="layout"
    :post="post"
  />
</template>

<script>
function slugFromPath(path, locale) {
  if (path === `/${locale}/`) return "home";
  return path.replace(`${locale}/`, "");
}

export default {
  components: {
    Home: () => import("~/pages-dynamic/home"),
    CategoryTerm: () => import("~/pages-dynamic/category"),
    Product: () => import("~/pages-dynamic/product"),
    Error: () => import("~/pages-dynamic/error"),
    ServicePage: () => import("~/pages-dynamic/service-page"),
  },

  head() {
    return {
      title:
        this.post.meta.title
        || (this.post.category && this.post.category.meta.description)
        || this.post.title
        || this.post.name
        || this.post.description,
      meta: [
        {
          name: "description",
          content:
            this.post.meta.description
            || (this.category && this.category.meta.description),
        },
      ],
    };
  },

  computed: {
    category() {
      if (this.post.__typename !== "Product") return null;
      return this.post.categories && this.post.categories.nodes[0];
    },
  },

  async asyncData({ app, route, store }) {
    const locale = store.getters["context/locale"];
    const slug = slugFromPath(route.path, locale);

    try {
      const { post } = await app.$q("post", { slug });
      if (post === null) {
        return {
          layout: "Error",
          post: {
            title: `${app.i18n.t("error.title")} - ${app.i18n.t(
              "general.domain",
            )}`,
          },
        };
      }
      /* prettier-ignore */
      post.__typename = post.__typename === 'CmsProduct' ? 'Product' : post.__typename;
      return { layout: post.__typename, post };
    } catch (event) {
      return {
        layout: "Error",
        post: {
          title: `${app.i18n.t("error.title")} - ${app.i18n.t(
            "general.domain",
          )}`,
        },
      };
    }
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
