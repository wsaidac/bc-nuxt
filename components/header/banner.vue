<template>
  <div class="header-banner">
    <img
      :alt="imageDescription"
      :src="imageUrl"
      class="header-banner__image"
    >
    <div class="container">
      <section
        v-if="payoff"
        class="header-banner__payoff"
        v-html="payoff"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',

  props: {
    imageDescription: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      required: true,
    },
    payoff: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
</style>
