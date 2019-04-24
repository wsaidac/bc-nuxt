<template>
  <div class="cg-category">
    <header-banner
      :image="bannerImage"
      :header="post.categoryHeader"
      :title="`${post.categoryHeader.title}`"
    />
    <cg-usps :usps="usps.items" />
    <category-kind
      v-for="(products, kind) in kinds"
      :key="kind"
      :title="`${post.categoryHeader.title}`"
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
          <div
            v-if="post.highlight.title || post.highlight.content"
            class="block block--yellow block--padded"
          >
            <category-highlights
              :title="post.highlight.title"
              :description="post.highlight.content"
            />
          </div>
          <div
            v-if="post.infoBlock.title || post.infoBlock.text"
            class="block block--blue block--padded"
          >
            <seo-block
              :title="post.infoBlock.title"
              :description="post.infoBlock.text"
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
import ServiceTerms from '~/components/service/terms';
import SeoBlock from '~/components/seo/block';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';
import { UiCol, UiRow } from '~/components/ui';

import { impressionTransformPop } from '~/plugins/gtm.js';


export default {
  components: {
    CategoryAccordion,
    CategoryHighlights,
    CategoryKind,
    CgUsps,
    HeaderBanner,
    SeoBlock,
    SeoBreadcrumbs,
    ServiceButton,
    ServiceTerms,
    UiCol,
    UiRow,
  },

  head() {
    const url = `https://${this.domain}${this.$route.path}`;
    const { banner, image } = this.post.categoryHeader;

    return {
      meta: [

        { property: 'og:type', content: 'og:product' },
        { property: 'bc:pagetype', content: 'POP' },
        { property: 'bc:pop:identifier', content: `${this.post.id}${this.$i18n.locale}` },
        { property: 'bc:pop:code', content: this.post.id },
        { property: 'bc:pop:slug', content: this.$router.currentRoute.path },
        { property: 'bc:pop:title', content: this.post.infoBlock.title },
        { property: 'bc:brand', content: this.post.infoBlock.title },
        // { property: 'bc:product:category', content: 'Mobile Recharge' },
        { property: "bc:pop:image", content: image && image.regular },
        { property: "bc:pop:image_banner_desktop", content: banner && banner.desktop },
        { property: "bc:pop:image_banner_mobile", content: banner && banner.mobile },
      ],
      link: [
        { rel: 'canonical', href: url },
      ],
    };
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps']),
    ...mapGetters('context', ['domain']),
    categoryText() {
      return this.post.name;
    },
    bannerImage() {
      return (
        this.post.categoryHeader.banner
        || this.$store.getters['shared/header'].image
      );
    },
    /* eslint-disable */
    kinds() {
      let count = 0;
      let kinds = groupBy(this.post.products.nodes, p => p.kinds.nodes[0].name);
      for (var key in kinds) {
        kinds[key] = kinds[key].map(node => ({ ...node, position: count++ }));
      }
      return kinds;
    },
    crumbs() {
      return [
        {
          url: '/',
          label: this.$t('general.home-text'),
          title:
            this.post.title,
        },
        { label: this.post.name },
      ];
    },
  },

  mounted() {
    this.$store.commit('shared/setPage', 'category');
    this.$track(impressionTransformPop(this.post));
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

      @include flex(null, null);

      .product-card__image {
        border: 1px solid $gray-400;
        margin: 10px;
        max-width: 200px;
        padding: 10px;
      }

      .product-card__content {
        flex-grow: 1;
        padding-top: 0;
      }

      .el-button {
        padding: 3px 10px;
      }
    }

    .el-row.is-padded {
      margin-top: 0;
    }
  }
}
</style>
