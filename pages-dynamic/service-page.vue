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

<style lang="scss">
/* below is wp-styling for correct img-text-wrapping */
.cg-service-page-content {
  img.alignright {
    float: right;
    margin: 0 0 1em 1em;
  }

  img.alignleft {
    float: left;
    margin: 0 1em 1em 0;
  }

  img.aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .alignright {
    float: right;
  }

  .alignleft {
    float: left;
  }

  .aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .clearfix {
    clear: both;
    content: "";
    display: table;
  }
}

/* end of wp-img-text-wrapping */
</style>
