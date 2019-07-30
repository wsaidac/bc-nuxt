<template>
  <font-icon
    v-if="isFontType"
    :icon="icon"
    v-bind="$attrs"
    :color="color"
    :font-size="fontSize"
  />
  <svg-icon
    v-else
    :icon="icon"
    v-bind="$attrs"
    :color="color"
    :font-size="fontSize"
  />
</template>

<script>
import VueTypes from 'vue-types';
import FontIcon from './font-icon';
import SvgIcon from './svg-icon';

const fontIconTypes = [
  'breadcrumb',
  'check',
  'close',
  'down',
  'entertainment',
  'giftcards',
  'min',
  'mobile-recharge',
  'plus',
  'popular',
  'prepaid-cards',
];

export default {
  name: 'UiIcon',
  components: {
    FontIcon,
    SvgIcon,
  },

  props: {
    icon: VueTypes.string.def(''),
    color: VueTypes.string.def('link'),
    fontSize: VueTypes.string.def('base'),
    reverse: Boolean,
  },

  computed: {
    isFontType() {
      return fontIconTypes.includes(this.icon);
    },
  },
};
</script>
