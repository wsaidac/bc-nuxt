<template>
  <p class="text-xs leading-normal lg:pr-6 flex items-center truncate">
    <icon
      icon="check"
      color="success"
      size="base"
    />
    <span
      class="pl-1"
      v-html="text"
    />
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
