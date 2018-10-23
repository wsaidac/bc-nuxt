<template>
  <div>
    <header-banner
      :image="post.header.image"
      :payoff-text="post.header.title"
    />
    <cg-usps
      :usps="post.usps.items"
    />
    <div class="container">
      <product-popular
        :products="post.popularProducts.items"
      />
    </div>
    <div class="block block--gray">
      <div class="container">
        <product-quickbuy
          :product="post.quickbuy.quickbuyProduct"
          :variants="post.relatedProducts"
        />
      </div>
    </div>
    <div class="block block--gray block--space-between block--mobile-white">
      <div class="container">
        <product-featured
          :categories="main.categories"
        />
      </div>
    </div>
    <div class="container">
      <service-banner
        :link="post.customerService.link"
        :image="post.customerService.image"
        :title="post.customerService.primaryText"
        :description="post.customerService.secondaryText"
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
  },
};
</script>
