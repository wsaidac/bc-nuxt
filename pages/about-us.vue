<template>
  <div class="cg-about-us">
    <header-banner
      :image="header.image"
      :payoff-text="header.title"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <seo-breadcrumbs :crumbs="crumbs" />
      <div class="cg-about-us__content">
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
      crumbs: app.$crumbs('About us'),
      htmlText: app.$staticHtmlContent('about-us'),
    };
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps', 'header']),
  },
};
</script>

<style lang="scss">
.cg-about-us__content {
  padding-bottom: 30px;
}
</style>
