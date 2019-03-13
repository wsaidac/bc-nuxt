<template>
  <div>
    <header-banner
      :image="header.image"
      :payoff-text="header.title"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <seo-breadcrumbs :crumbs="crumbs" />
      <h1 v-text="post.title" />
      <div class="cg-service-page-content">
        <div v-html="post.html" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeaderBanner from "~/components/header/banner";
import CgUsps from "~/components/usps";
import SeoBreadcrumbs from "~/components/seo/breadcrumbs";

export default {
  components: {
    HeaderBanner,
    CgUsps,
    SeoBreadcrumbs,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters("shared", ["usps", "header"]),
    crumbs() {
      return this.$crumbs(this.post.title);
    },
  },

  head() {
    return {
      title: this.post.title,
    };
  },
};
</script>
