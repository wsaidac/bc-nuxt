<template functional>
  <span :class="[data.staticClass, 'flag-icon w-4', { 'flag-icon-squared': props.squared }, `flag-icon-${props.country.toLowerCase()}`]" />
</template>

<script>
export default {
  props: {
    squared: Boolean,
    country: {
      type: String,
      default: 'us',
    },
  },
};
</script>
