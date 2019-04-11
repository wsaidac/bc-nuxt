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
    ...mapGetters('context', ['domain']),
    ...mapGetters("shared", ["usps", "header"]),
    crumbs() {
      return this.generateCrumbs(this.post.title);
    },
  },

  head() {
    const url = `https://${this.domain}${this.$route.path}`;

    return {
      title: this.post.title,
      meta: [
        { rel: 'canonical', href: url },
      ],
    };
  },
};
</script>
