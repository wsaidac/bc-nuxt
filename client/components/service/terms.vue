<template>
  <div class="service-terms">
    <strong v-text="title" />
    <div v-html="description" />
  </div>
</template>

<script>
export default {
  name: 'ServiceTerms',

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
.service-terms {
  font-size: $font-size-small;
  margin: 50px 0 30px;

  p {
    color: $gray-500;
    font-size: $font-size-smaller;
  }
}
</style>
