<template>
  <div class="footer-seo-block">
    <h2 v-text="customerService.closingTitle"/>
    <p v-text="customerService.closingText"/>
  </div>
</template>

<script>
export default {
  name: 'FooterBlockText',

  props: {
  },
};
</script>

<style lang="scss">
.footer-seo-block {
}
</style>
