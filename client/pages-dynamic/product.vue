<template>
  <div class="cg-product">
    <header-banner
      :image="bannerImage"
      :header="brand.categoryHeader"
      :title="post.title"
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
              :title="brand.highlight.title"
              :description="brand.highlight.content"
            >
              <p v-text="post.content.subtext" />
            </category-highlights>
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
            :slides="brand.faqQuestions.questions"
          />
        </ui-col>
        <ui-col :sm="12">
          <div
            v-if="brand.infoBlock.title || brand.infoBlock.text"
            class="block block--blue block--padded"
          >
            <seo-block
              :title="brand.infoBlock.title"
              :description="brand.infoBlock.text"
            />
          </div>
        </ui-col>
      </ui-row>
    </div>

    <div class="container">
      <service-button />
      <service-terms
        :title="brand.terms.title"
        :description="brand.terms.text"
      />
      <seo-breadcrumbs :crumbs="crumbs" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { uniqBy } from 'lodash';

import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import CategoryAccordion from '~/components/category/accordion';
import CategoryHighlights from '~/components/category/highlights';
import ServiceButton from '~/components/service/button';
import ServiceTerms from '~/components/service/terms';
import SeoBlock from '~/components/seo/block';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';
import { UiCol, UiRow } from '~/components/ui';
import ProductCard from '~/components/product/card';
import SharedTitle from '~/components/shared/title';
import ProductVariants from '~/components/product/variants';
import generateCrumbs from '~/mixins/generateCrumbs';

export default {
  components: {
    HeaderBanner,
    CgUsps,
    CategoryAccordion,
    CategoryHighlights,
    ServiceButton,
    SeoBlock,
    SeoBreadcrumbs,
    UiCol,
    UiRow,
    ProductCard,
    SharedTitle,
    ProductVariants,
    ServiceTerms,
  },

  mixins: [generateCrumbs],

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  head() {
    const date = new Date();
    const { image } = this.brand.categoryHeader;
    const url = `https://${this.domain}/${this.$i18n.locale}/${this.brand.slug}`;
    const { kinds, brands } = this.post;

    const categoryMetas = kinds && kinds.nodes.map(
      kind => ({
        property: 'bc:category',
        content: kind.name.replace('&amp;', '&'),
      }),
    );

    const brandMetas = brands && brands.nodes.map(
      brand => ({
        property: 'bc:brand',
        content: brand.name.replace('&amp;', '&'),
      }),
    );

    return {
      meta: [
        { property: 'og:type', content: 'og:product' },
        { property: 'og:updated_time', content: date.toISOString() },
        { property: 'bc:pagetype', content: 'PDP' },
        {
          property: 'bc:pdp:identifier',
          content: `${this.post.rapidoProduct.id}${this.$i18n.locale}`,
        },
        { property: 'bc:product:code', content: this.post.rapidoProduct.id },
        { property: 'bc:pdp:slug', content: this.$router.currentRoute.path },
        { property: 'bc:pdp:title', content: this.post.title },
        {
          property: 'bc:pdp:denomination',
          content: this.$n(this.post.information.issueValue, 'currency'),
        },
        { property: 'bc:pdp:image', content: image && image.regular },
        {
          property: 'bc:pdp:image_banner_desktop',
          content: this.bannerImage.desktop,
        },
        {
          property: 'bc:pdp:image_banner_mobile',
          content: this.bannerImage.mobile,
        },
        { itemprop: 'availability', content: 'http://schema.org/InStock' },
        ...uniqBy(categoryMetas, 'content'),
        ...uniqBy(brandMetas, 'content'),
      ],
      link: [{ rel: 'canonical', href: url }],
    };
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps', 'header']),
    ...mapGetters('context', ['domain']),
    brand() {
      return this.post.brands.nodes[0];
    },
    category() {
      return this.post.categories.nodes[0];
    },
    bannerImage() {
      return this.post.content.banner || this.brand.categoryHeader.banner;
    },
    crumbs() {
      return this.generateCrumbs(this.post.title, [
        { url: this.brand.slug, label: this.brand.name },
      ]);
    },
  },

  mounted() {
    this.$store.commit('shared/setPage', 'product');
    this.$track('viewTransformDetail', { product: this.post });
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
