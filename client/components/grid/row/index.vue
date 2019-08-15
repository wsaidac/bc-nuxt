<template functional>
  <div
    class="flex relative overflow-hidden -mx-1 sm:-mx-2 xl:-mx-3"
    v-bind="data.attrs"
    :class="[data.staticClass, props.wrap ? 'flex-wrap' : 'flex-no-wrap']"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    wrap: Boolean,
  },
};
</script>
