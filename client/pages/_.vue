<template>
  <div
    :is="layout"
    :post="post"
    class="cg-container"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import removeContextChangeLoader from '~/mixins/removeContextChangeLoader';
import { uppercaseCountryInLocale } from '~/utils/';

function slugFromPath(path, locale) {
  if (path === `/${locale}/`) return 'home';
  return path.replace(`${locale}/`, '');
}

export default {
  components: {
    Home: () => import('~/pages-dynamic/home'),
    CategoryTerm: () => import('~/pages-dynamic/category'),
    Product: () => import('~/pages-dynamic/product'),
    Error: () => import('~/pages-dynamic/error'),
    ServicePage: () => import('~/pages-dynamic/service-page'),
  },

  head() {
    if (this.layout === 'Error') return {};
    const { locale } = this.$i18n;

    return {
      htmlAttrs: {
        lang: uppercaseCountryInLocale(locale),
      },
      title:
        this.post.meta.title
        || (this.post.category && this.post.category.meta.description)
        || this.post.title
        || this.post.name
        || this.post.description,
      meta: [
        {
          name: 'description',
          content:
            this.post.meta.description
            || (this.category && this.category.meta.description),
        },
      ],
      link: [
        {
          rel: 'alternate',
          href: `https://${this.domain}${this.$route.path}`,
          hreflang: uppercaseCountryInLocale(locale),
        },
      ],
    };
  },

  mixins: [removeContextChangeLoader],

  computed: {
    ...mapGetters('context', ['domain']),
    category() {
      if (this.post.__typename !== 'Product') return null;
      return this.post.categories && this.post.categories.nodes[0];
    },
  },

  async asyncData({ app, route }) {
    const slug = slugFromPath(route.path, app.i18n.locale);
    try {
      const { data: { post } } = await app.$query('post', { slug });
      if (post === null) {
        return {
          layout: 'Error',
          post: {
            title: `${app.i18n.t('error.title')} - ${app.i18n.t(
              'general.domain',
            )}`,
          },
        };
      }

      post.__typename = post.__typename === 'CmsProduct' ? 'Product' : post.__typename;
      return { layout: post.__typename, post };
    } catch (event) {
      return {
        layout: 'Error',
        post: {
          title: `${app.i18n.t('error.title')} - ${app.i18n.t(
            'general.domain',
          )}`,
        },
      };
    }
  },

  middleware: 'cdnCacheHeader',

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
