<template>
  <div :class="classes">
    <ui-icon icon="arrow-right-open" />
    <slot />
  </div>
</template>

<script>

import UiIcon from '~/components/ui/icon';

export default {
  components: {
    UiIcon,
  },
  props: {
    highlighted: Boolean,
  },
  computed: {
    classes() {
      const base = 'relative rounded-lg border border-gray border-solid p-4';
      const hightlight = this.highlighted ? 'border-t-4 rounded-t-none border-t-highlight' : '';
      return [base, hightlight];
    },
  },
};
</script>
