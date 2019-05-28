<template>
  <div class="cg-product">
    <header-banner
      :image="bannerImage"
      :header="category.categoryHeader"
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
              :title="category.highlight.title"
              :description="category.highlight.content"
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
    const { image } = this.category.categoryHeader;
    const url = `https://${this.domain}/${this.$i18n.locale}/${
      this.category.slug
    }`;
    const categoryTags = this.post.kinds.nodes.map(kind => ({
      property: 'bc:category',
      content: kind.name,
    }));

    const meta = [
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
      { property: 'bc:brand', content: this.brand.name.replace('&amp;', '&') },
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
    ].concat(categoryTags);

    return {
      meta,
      __dangerouslyDisableSanitizers: ['meta'],
      link: [{ rel: 'canonical', href: url }],
    };
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps', 'header']),
    ...mapGetters('context', ['domain']),
    category() {
      const categorySlug = this.$route.path.split('/')[2];
      return this.post.categories.nodes.find(
        category => category.slug === categorySlug,
      );
    },
    brand() {
      return (this.post.brands && this.post.brands.nodes[0]) || this.category;
    },
    bannerImage() {
      return (
        this.post.content.banner
        || this.category.categoryHeader.banner
        || this.header.image
      );
    },
    crumbs() {
      return this.generateCrumbs(this.post.title, [
        { url: this.category.slug, label: this.category.name },
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
