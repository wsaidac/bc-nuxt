<template>
  <div class="cg-category">
    <header-banner
      :image="bannerImage"
      :payoff-image="post.categoryHeader.image"
      :title="post.categoryHeader.title"
    />
    <cg-usps :usps="usps.items" />
    <category-kind
      v-for="(products, kind) in kinds"
      :key="kind"
      :title="kind"
      :category-text="categoryText"
      :products="products"
    />
    <div class="cg-category__info-block container container--mobile-not-padded">
      <ui-row padded>
        <ui-col :sm="12">
          <category-accordion
            :usps="usps.items"
            :slides="post.faqQuestions.questions"
          />
        </ui-col>
        <ui-col :sm="12">
          <div class="block block--yellow block--padded">
            <category-highlights
              :title="post.highlight.title"
              :description="post.highlight.content"
            />
          </div>
          <div class="block block--blue block--padded">
            <seo-block
              :title="post.infoBlock.title"
              :description="post.infoBlock.content"
            />
          </div>
        </ui-col>
      </ui-row>
    </div>
    <div class="container container--not-mobile-not-padded">
      <ui-row padded>
        <ui-col>
          <service-button />
        </ui-col>
      </ui-row>
      <service-terms
        :title="post.terms.title"
        :description="post.terms.text"
      />
      <service-banner :customer-service="customerService" />
      <seo-breadcrumbs :crumbs="crumbs" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { groupBy } from 'lodash';
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import CategoryKind from '~/components/category/kind';
import CategoryAccordion from '~/components/category/accordion';
import CategoryHighlights from '~/components/category/highlights';
import ServiceButton from '~/components/service/button';
import ServiceBanner from '~/components/service/banner';
import ServiceTerms from '~/components/service/terms';
import SeoBlock from '~/components/seo/block';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';
import { UiCol, UiRow } from '~/components/ui';

export default {
  components: {
    CategoryAccordion,
    CategoryHighlights,
    CategoryKind,
    CgUsps,
    HeaderBanner,
    SeoBlock,
    SeoBreadcrumbs,
    ServiceBanner,
    ServiceButton,
    ServiceTerms,
    UiCol,
    UiRow,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps']),

    bannerImage() {
      return (
        this.post.categoryHeader.banner
        || this.$store.getters['shared/header'].image
      );
    },
    kinds() {
      return groupBy(this.post.products.nodes, p => p.kinds.nodes[0].name);
    },
    crumbs() {
      return [
        {
          url: '/',
          label: 'Home',
          title:
            'Rapido.com: Buy your favorite Gift Cards online | Fast Email Delivery',
        },
        { label: this.post.name },
      ];
    },
  },
};
</script>

<style lang="scss">
.cg-category {
  .block--yellow {
    margin-bottom: 30px;
  }

  @include media-breakpoint-only("xs") {
    &__breadcrumbs {
      display: none !important;
    }

    .product-card--mode-vertical {
      margin-top: 0;
      max-width: none;

      @include flex();

      .product-card__image {
        border: 1px solid $gray-400;
        margin: 10px;
        max-width: 200px;
        padding: 10px;
      }

      .product-card__content {
        flex-grow: 1;
        padding-left: 0;
      }

      .el-button {
        @include position(relative, 3px 0 0 0);
      }
    }

    .el-row.is-padded {
      margin-top: 0;
    }
  }
}
</style>
