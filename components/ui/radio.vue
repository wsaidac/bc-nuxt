<template>
  <el-radio
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-radio>
</template>

<script>
import ElRadio from 'element-ui/lib/radio.js';

export default {
  name: 'UiRadio',

  components: {
    ElRadio,
  },
};
</script>

<style lang="scss">
// $--input-border-radius: 5px; // checky
// $--input-focus-border: var(--primary-500); // checky

@import "element-ui/packages/theme-chalk/src/radio.scss";
</style>
