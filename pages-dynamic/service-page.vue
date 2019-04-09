<template>
  <div>
    <header-banner
      :image="header.image"
      :header="header"
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
import generateCrumbs from '~/mixins/generateCrumbs';

export default {
  components: {
    HeaderBanner,
    CgUsps,
    SeoBreadcrumbs,
  },

  mixins: [generateCrumbs],

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters("shared", ["usps", "header"]),
    crumbs() {
      return this.generateCrumbs(this.post.title);
    },
  },

  head() {
    return {
      title: this.post.title,
    };
  },
};
</script>
