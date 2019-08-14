<template functional>
  <div
    v-bind="data.attrs"
    class="container mx-auto w-full md:px-10 relative overflow-hidden"
    :class="[
      data.staticClass,
      props.withoutInsets ? '' : 'px-6'
    ]"
  >
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    withoutInsets: Boolean,
  },
};
</script>
