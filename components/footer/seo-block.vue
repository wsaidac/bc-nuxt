<template>
  <div class="footer-seo-block">
    <h2 v-text="title" />
    <p v-text="description" />
  </div>
</template>

<script>
export default {
  name: 'FooterBlockText',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.footer-seo-block {
  @include media-breakpoint-up('md') {
    padding: 20px 0 40px;
  }

  h2 {
    font-size: $font-size-h5;
    margin: 0;
  }

  p {
    margin: 0;
  }
}
</style>
