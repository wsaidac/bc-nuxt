<template>
  <p class="text-xs lg:text-length lg:pr-6">
    <ui-icon
      icon="check"
      color="success"
      size="xs"
    />
    <span v-html="text" />
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
