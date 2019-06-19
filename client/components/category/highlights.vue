<template>
  <div class="category-highlights">
    <h2 v-text="title" />
    <div v-html="description" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CategoryHighlights',

  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.category-highlights {
  h2 {
    font-size: $font-size-h4;
  }

  h3 {
    font-size: $font-size-h6;
    margin: 0;
  }

  p {
    margin: 0 0 20px;
  }
}
</style>
