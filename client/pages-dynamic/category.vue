<template>
  <div class="cg-category">
    <header-banner
      :image="bannerImage"
      :header="post.categoryHeader"
      :title="post.categoryHeader.title"
    />
    <cg-usps :usps="usps.items" />
    <shared-title :title="post.categoryHeader.title" />
    <category-kind
      v-for="(products, kindName) in productsByKind"
      :key="kindName"
      :title="`${kindTitle(products)}`"
      :products="products"
      :mixed-category="mixedCategory"
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
        v-if="post.terms && post.terms.text"
        :title="post.terms.title"
        :description="post.terms.text"
      />
      <seo-breadcrumbs :crumbs="crumbs" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { groupBy, uniqBy, get } from 'lodash';
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
import SharedTitle from '~/components/shared/title';

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
    SharedTitle,
  },

  head() {
    const url = `https://${this.domain}${this.$route.path}`;
    const { banner, image, title } = this.post.categoryHeader;
    const categoryMetas = [];
    const brandMetas = [];

    this.post.products.nodes.forEach(({ kinds, brands }) => {
      if (kinds) {
        categoryMetas.push(
          ...kinds.nodes.map(
            kind => ({
              property: 'bc:category',
              content: kind.name.replace('&amp;', '&'),
            }),
          ),
        );
      }

      if (brands) {
        brandMetas.push(
          ...brands.nodes.map(
            brand => ({
              property: 'bc:brand',
              content: brand.name.replace('&amp;', '&'),
            }),
          ),
        );
      }
    });

    return {
      meta: [
        { property: 'og:type', content: 'og:product' },
        { property: 'bc:pagetype', content: 'POP' },
        { property: 'bc:pop:identifier', content: `${this.post.id}${this.$i18n.locale}` },
        { property: 'bc:pop:code', content: this.post.id },
        { property: 'bc:pop:slug', content: this.$router.currentRoute.path },
        { property: 'bc:pop:title', content: title },
        { property: 'bc:pop:image', content: image && image.regular },
        { property: 'bc:pop:image_banner_desktop', content: banner && banner.desktop },
        { property: 'bc:pop:image_banner_mobile', content: banner && banner.mobile },
        { itemprop: 'availability', content: 'http://schema.org/InStock' },
        ...uniqBy(categoryMetas, 'content'),
        ...uniqBy(brandMetas, 'content'),
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
    productsByKind() {
      const validProducts = this.post.products.nodes.filter(product => product.rapidoProduct && product.id);
      return groupBy(validProducts, product => product.kinds.nodes[0].name);
    },
    mixedCategory() {
      return Object.keys(this.productsByKind).length > 1;
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
    this.$track('impressionTransformPop', { post: this.post });
    this.$track('productViewTransformPop', { post: this.post });
  },

  methods: {
    kindTitle(products) {
      return get(products[0], 'kinds.nodes[0].kindTitle.title', '') || '';
    },
  },
};
</script>

<style lang="scss">
.cg-category {
  .block--yellow {
    margin-bottom: 30px;
  }

  .category-kind + .category-kind {
    .block {
      padding-top: 0;
    }

    .category-kind__title {
      border-top: 1px solid $gray-300;
      margin-top: 0;
      padding-top: 40px;
    }
  }

  @include media-breakpoint-down("sm") {
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
