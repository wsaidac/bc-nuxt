<template>
  <div class="cg-product">
    <header-banner
      :image="bannerImage"
      :payoff-image="category.categoryHeader.image"
      :title="category.categoryHeader.title"
    />
    <cg-usps :usps="usps.items" />
    <shared-title :title="post.title" />
    <div class="block block--gray">
      <div class="container">
        <ui-row>
          <ui-col
            :lg="6"
            :md="8"
            :sm="12"
            :xs="24"
          >
            <product-card
              :product="post"
              has-select
            />
          </ui-col>
          <ui-col
            :lg="18"
            :md="16"
            :sm="12"
            :xs="24"
          >
            <category-highlights
              :title="category.highlight.title"
              :description="category.highlight.content"
            />
            <product-variants :product="post" />
          </ui-col>
        </ui-row>
      </div>
    </div>

    <div class="container container--mobile-not-padded">
      <ui-row padded>
        <ui-col :sm="12">
          <category-accordion
            :usps="usps.items"
            :slides="category.faqQuestions.questions"
          />
        </ui-col>
        <ui-col :sm="12">
          <div
            v-if="category.infoBlock.title || category.infoBlock.text"
            class="block block--blue block--padded"
          >
            <seo-block
              :title="category.infoBlock.title"
              :description="category.infoBlock.text"
            />
          </div>
        </ui-col>
      </ui-row>
    </div>

    <div class="container">
      <service-button />
      <service-terms
        :title="category.terms.title"
        :description="category.terms.text"
      />
      <service-banner :customer-service="customerService" />
      <seo-breadcrumbs :crumbs="crumbs" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import CategoryAccordion from '~/components/category/accordion';
import CategoryHighlights from '~/components/category/highlights';
import ServiceButton from '~/components/service/button';
import ServiceBanner from '~/components/service/banner';
import ServiceTerms from '~/components/service/terms';
import SeoBlock from '~/components/seo/block';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';
import { UiCol, UiRow } from '~/components/ui';
import ProductCard from '~/components/product/card';
import SharedTitle from '~/components/shared/title';
import ProductVariants from '~/components/product/variants';

export default {
  components: {
    HeaderBanner,
    CgUsps,
    CategoryAccordion,
    CategoryHighlights,
    ServiceButton,
    ServiceBanner,
    SeoBlock,
    SeoBreadcrumbs,
    UiCol,
    UiRow,
    ProductCard,
    SharedTitle,
    ProductVariants,
    ServiceTerms,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps', 'header']),
    category() {
      return this.post.categories.nodes[0];
    },
    bannerImage() {
      return this.post.content.banner || this.category.categoryHeader.banner || this.header.image;
    },
    crumbs() {
      return [
        { url: '/', label: 'Home', title: 'Rapido.com: Buy your favorite Gift Cards online | Fast Email Delivery' },
        { url: this.category.slug, label: this.category.name },
        { label: this.post.content.title },
      ];
    },
  },
};
</script>

<style lang="scss">
.cg-product {
  @include media-breakpoint-only("xs") {
    .product-card {
      margin: auto !important;
    }

    .shared-title h1 {
      display: none;
    }
  }
}
</style>
