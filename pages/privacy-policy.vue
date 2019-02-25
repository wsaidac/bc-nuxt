<template>
  <div class="cg-payment-options">
    <header-banner
      :image="header.image"
      :payoff-text="header.title"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <seo-breadcrumbs :crumbs="crumbs" />
      <div class="cg-payment-options__content">
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
      crumbs: app.$crumbs('Privacy policy'),
      htmlText: app.$staticHtmlContent('privacy-policy'),
    };
  },

  computed: {
    ...mapGetters('shared', ['usps', 'header']),
  },
};
</script>

<style lang="scss">
.cg-payment-options {
  padding-bottom: 30px;

  &__content {
    h5 {
      margin-bottom: 0;
    }

    h5 ~ p {
      margin-top: 0;
    }

    ul {
      margin: 3px;
      padding-left: 19px;
    }

    .no-margin {
      margin: 0;
    }
  }
}
</style>
