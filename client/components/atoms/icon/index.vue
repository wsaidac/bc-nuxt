<template>
  <font-icon
    v-if="isFontType"
    :icon="icon"
    :color="color"
    :font-size="fontSize"
    v-bind="$attrs"
    v-on="$listeners"
  />
  <svg-icon
    v-else
    :icon="icon"
    :color="color"
    :font-size="fontSize"
    v-bind="$attrs"
    v-on="$listeners"
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
  'warning',
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
