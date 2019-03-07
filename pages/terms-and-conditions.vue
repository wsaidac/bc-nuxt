<template>
  <div class="cg-conditions">
    <header-banner
      :image="header.image"
      :payoff-text="header.title"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <seo-breadcrumbs :crumbs="crumbs" />
      <div class="cg-conditions__content">
        <div v-html="htmlText" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';

export default {
  components: {
    HeaderBanner,
    CgUsps,
    SeoBreadcrumbs,
  },

  asyncData({ app }) {
    return {
      crumbs: app.$crumbs('Terms and conditions'),
      htmlText: app.$staticHtmlContent('terms-and-conditions'),
    };
  },

  head() {
    return {
      title: this.$t('internal-links.general-conditions'),
    };
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps', 'header']),
  },
};
</script>

<style lang="scss">
.cg-conditions {
  padding-bottom: 30px;

  h5 {
    margin: 50px 0 20px;
  }

  ul {
    ul {
      margin: 3px;
    }
  }

  @include media-breakpoint-down("md") {
    &__content {
      p,
      li {
        font-size: 12px;
      }
    }
  }
}
</style>
