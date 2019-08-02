<template>
  <p class="text-base lg:text-length lg:pr-6">
    <ui-icon
      icon="check"
      color="success"
      size="base"
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
