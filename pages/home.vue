<template>
  <div>
    <header-banner
      :image-url="post.header.image.sourceUrl"
      :payoff="post.header.title"
    />
    <header-usps :usps="post.usps.items" />
    <header-mobile-usps :usps="post.usps.items" />
    <div class="container">
      <product-popular
        :products="post.products"
      />
    </div>
    <div class="block block--gray">
      <div class="container">
        <product-quickbuy
          :product="post.quickbuyProduct"
          :related="post.relatedProducts"
        />
      </div>
    </div>
    <div class="block block--gray block--space-between">
      <div class="container">
        <product-featured
          :categories="main.products"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';
import HeaderBanner from '~/components/header/banner';
import HeaderUsps from '~/components/header/usps';
import HeaderMobileUsps from '~/components/header/mobile-usps';
import ProductPopular from '~/components/product/popular';
import ProductQuickbuy from '~/components/product/quickbuy';
import ProductFeatured from '~/components/product/featured';
import { mapGetters } from 'vuex';

export default {
  components: {
    UiIcon,
    HeaderBanner,
    HeaderUsps,
    HeaderMobileUsps,
    ProductPopular,
    ProductQuickbuy,
    ProductFeatured,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  // async asyncData({ app }) {
  //   console.log('loading page');
  //   const { post } = await app.$q('post', { slug: 'home' });
  //   return Object.assign({}, post, mockData);
  // },
  computed: {
    ...mapGetters('menus', ['main']),
  },
};
</script>

<style lang="scss">
</style>
