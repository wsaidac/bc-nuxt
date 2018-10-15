<template>
  <button
    :class="classes"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'HeaderHamburger',

  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        'hamburger',
        'hamburger--spin',
        { 'is-active': this.active },
      ];
    },
  },
};
</script>

<style lang="scss">
$hamburger-padding-x: 15px;
$hamburger-padding-y: 15px;
$hamburger-layer-width: 16px;
$hamburger-layer-height: 2px;
$hamburger-layer-spacing: 3px;
$hamburger-layer-color: $white;
$hamburger-layer-border-radius: 2px;
$hamburger-hover-opacity: 0.7;
$hamburger-active-layer-color: $hamburger-layer-color;
$hamburger-active-hover-opacity: $hamburger-hover-opacity;
$hamburger-hover-use-filter: false;
$hamburger-hover-filter: opacity(50%);
$hamburger-active-hover-filter: $hamburger-hover-filter;
$hamburger-types: (spin);

@import '~hamburgers/_sass/hamburgers/_base.scss';
@import '~hamburgers/_sass/hamburgers/types/_spin.scss';

.hamburger {
  outline: none;
}
</style>
