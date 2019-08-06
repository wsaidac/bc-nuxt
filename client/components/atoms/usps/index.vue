<template>
  <p class="text-base lg:text-length lg:pr-6">
    <icon
      icon="check"
      color="success"
      size="base"
    />
    <span v-html="text" />
  </p>
</template>

<script>
import Icon from '~/components/atoms/icon';

export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
