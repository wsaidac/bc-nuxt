<template>
  <div class="cg-cookies">
    <header-banner
      :image="header.image"
      :payoff-text="header.title"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <seo-breadcrumbs :crumbs="crumbs" />
      <div class="cg-cookies__content">
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
      crumbs: app.$crumbs('Cookie statement'),
      htmlText: app.$staticHtmlContent('cookies'),
    };
  },

  head() {
    return {
      title: this.$t('internal-links.cookies'),
    };
  },

  computed: {
    ...mapGetters('shared', ['usps', 'header']),
  },
};
</script>

<style lang="scss">
.cg-cookies {
  padding-bottom: 30px;

  p {
    line-height: 20px;
    margin: 0;
  }

  .COOKIES-POLICY {
    font-size: 18px;
    font-weight: $font-weight-mediumbold;
  }

  &__content {
    h5 {
      line-height: 25px;
      margin-bottom: 0;
    }

    ul {
      margin-top: 3px;
      padding-left: 19px;
    }
  }
}
</style>
