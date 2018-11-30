<template>
  <div class="cg-home">
    <header-banner
      :image="post.header.image"
      :payoff-text="post.header.title"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <product-popular :popular-products="post.popularProducts" />
    </div>
    <div class="block block--gray cg-home__quickbuy">
      <div class="container">
        <product-quickbuy
          v-if="post.quickbuy && post.quickbuy.quickbuyProduct"
          :default-product="post.quickbuy && post.quickbuy.quickbuyProduct" />
      </div>
    </div>
    <div class="block block--gray block--space-between block--mobile-white">
      <div class="container container--mobile-padded">
        <product-featured :categories="main.categories" />
      </div>
    </div>
    <div class="container">
      <service-banner
        v-if="customerService"
        :link="customerService.link"
        :image="customerService.image"
        :title="customerService.primaryText"
        :description="customerService.secondaryText"
      />
      <seo-block
        :title="post.seoBlock.title"
        :description="post.seoBlock.text"
      />
    </div>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import ProductPopular from '~/components/product/popular';
import ProductQuickbuy from '~/components/product/quickbuy';
import ProductFeatured from '~/components/product/featured';
import ServiceBanner from '~/components/service/banner';
import SeoBlock from '~/components/seo/block';
import { mapGetters } from 'vuex';

export default {
  components: {
    UiIcon,
    HeaderBanner,
    CgUsps,
    ProductPopular,
    ProductQuickbuy,
    ProductFeatured,
    ServiceBanner,
    SeoBlock,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters('menus', ['main']),

    ...mapGetters('shared', ['customerService', 'usps']),
  },
};
</script>

<style lang="scss">
.cg-home {
  @include media-breakpoint-only('xs') {
    .seo-block {
      display: none;
    }
  }

  &__quickbuy {
    position: relative;
  }
}
</style>
