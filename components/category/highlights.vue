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
.category-highlights {
  padding-bottom: 20px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 20px 0 0 0;
  }

  p {
    margin: 0;
  }
}
</style>
