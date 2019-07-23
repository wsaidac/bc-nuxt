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
    fontSize: VueTypes.string.def('base'),
  },

  computed: {
    classes() {
      return [
        'ui-icon',
        { [`ui-icon-${this.icon}`]: this.icon },
        { [`text-${this.color}`]: this.color },
        { [`text-${this.fontSize}`]: this.fontSize },
      ];
    },
  },
};
</script>
