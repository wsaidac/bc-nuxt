<template>
  <button
    :class="['hamburger hamburger--3dxy-r', { 'is-active': active }]"
    type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.hamburger {
  outline: none;
  transform: scale(0.7);
}

$hamburger-padding-x           : 15px !default;
$hamburger-padding-y           : 15px !default;
$hamburger-layer-width         : 40px !default;
$hamburger-layer-height        : 4px !default;
$hamburger-layer-spacing       : 6px !default;
$hamburger-layer-color         : white !default;
$hamburger-layer-border-radius : 4px !default;
$hamburger-hover-opacity       : 0.7 !default;
$hamburger-active-layer-color  : $hamburger-layer-color !default;
$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

// To use CSS filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter as true and
// change the value of $hamburger-hover-filter accordingly.
$hamburger-hover-use-filter   : false !default;
$hamburger-hover-filter       : opacity(50%) !default;
$hamburger-active-hover-filter: $hamburger-hover-filter !default;

$hamburger-types: (
  3dxy-r,
) !default;


// @import '~hamburgers/_sass/hamburgers/hamburgers.scss'; goed
@import '~hamburgers/_sass/hamburgers/_base.scss'; // goed
@import '~hamburgers/_sass/hamburgers/types/_3dxy-r.scss';

</style>
