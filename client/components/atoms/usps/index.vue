<template>
  <p class="text-xs leading-normal lg:pr-6 flex items-center md:truncate">
    <flag
      v-if="country"
      :country="country"
    />
    <icon
      v-else
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
import VueTypes from 'vue-types';
import Icon from '~/components/atoms/icon';
import Flag from '~/components/atoms/flag';

export default {
  components: {
    Icon,
    Flag,
  },
  props: {
    text: VueTypes.string,
    country: VueTypes.string,
    truncate: VueTypes.bool.def(true),
  },
};
</script>
