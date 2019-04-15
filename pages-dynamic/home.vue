<template>
  <div class="cg-home">
    <header-banner
      :image="post.header.image"
      :header="post.header"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <product-popular :popular-products="post.popularProducts" />
    </div>
    <div class="block block--gray cg-home__quickbuy">
      <div class="container">
        <product-quickbuy
          v-if="post.quickbuy && post.quickbuy.quickbuyProduct"
          :default-product="post.quickbuy && post.quickbuy.quickbuyProduct"
        />
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
        :customer-service="customerService"
      />
      <seo-block
        :title="post.seoBlock.title"
        :description="post.seoBlock.text"
      />
    </div>
  </div>
</template>

<script>
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

  head() {
    const url = `https://${this.domain}/${this.$i18n.locale}/`;
    return {
      link: [
        { rel: 'canonical', href: url },
      ],
    };
  },

  computed: {
    ...mapGetters('menus', ['main']),
    ...mapGetters('context', ['domain']),
    ...mapGetters('shared', ['customerService', 'usps']),
  },
};
</script>

<style lang="scss">
.cg-home {
  @include media-breakpoint-only("xs") {
    .seo-block {
      display: none;
    }
  }

  &__quickbuy {
    position: relative;
  }
}
</style>
