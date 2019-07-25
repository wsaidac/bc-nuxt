<template>
  <i
    :class="classes"
    v-on="$listeners"
  >
    <slot />
  </i>
</template>

<script>
import VueTypes from 'vue-types';

const iconTypes = [
  'breadcrumb',
  'check',
  'down',
  'entertainment',
  'giftcards',
  'hole',
  'min',
  'mobile-recharge',
  'plus',
  'popular',
  'prepaid-cards',
];

export default {
  name: 'UiIcon',

  props: {
    icon: VueTypes.oneOf(iconTypes),
    color: VueTypes.string.def('link'),
    size: VueTypes.string.def('base'),
    reverse: Boolean,
  },

  computed: {
    classes() {
      return [
        'ui-icon',
        { [`ui-icon-${this.icon}`]: this.icon },
        { [`text-${this.color}`]: this.color },
        { [`text-${this.size}`]: this.size },
        { 'rotate-180': this.reverse },
      ];
    },
  },
};
</script>
