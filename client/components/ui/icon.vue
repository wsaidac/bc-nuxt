<template>
  <i
    :class="classes"
    v-on="$listeners"
  >
    <slot />
  </i>
</template>

<script>
export default {
  name: 'UiIcon',

  props: {
    icon: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      return [
        'ui-icon',
        { [`ui-icon-${this.icon}`]: this.icon },
      ];
    },
  },
};
</script>

<style lang="scss">
.ui-icon {
  cursor: inherit;
  display: inline-block;
  font-size: 16px;
  user-select: none;
  vertical-align: middle;
}
</style>
