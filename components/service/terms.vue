<template>
  <div class="service-terms">
    <strong v-text="serviceTerms.title" />
    <p v-html="serviceTerms.description" />
  </div>
</template>

<script>
export default {
  props: {
    serviceTerms: {
      type: Object,
      default: () => {},
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
