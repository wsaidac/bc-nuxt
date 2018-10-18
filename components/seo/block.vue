<template>
  <div class="seo-block">
    <h2 v-text="title" />
    <p v-html="description" />
  </div>
</template>

<script>
export default {
  name: 'SeoBlock',

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
.seo-block {
  background: $primary-100;
  padding: 20px;

  h2 {
    font-size: $font-size-h5;
    margin: 0;
  }

  p {
    margin: 0;
  }
}
</style>
