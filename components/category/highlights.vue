<template>
  <div class="category-highlights">
    <h2 v-text="title" />
    <div v-html="description" />
  </div>
</template>

<script>
export default {
  name: 'CategoryHighlights',

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
</style>
