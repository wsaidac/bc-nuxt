<template>
  <button
    class="active:bounce flex"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <icon
      aria-hidden="true"
      :icon="icon"
      :color="color"
      :font-size="fontSize"
    />
  </button>
</template>

<script>
import VueTypes from 'vue-types';
import Icon from '~/components/atoms/icon';

export default {
  components: {
    Icon,
  },
  props: {
    icon: VueTypes.string.def(''),
    color: VueTypes.string.def('link'),
    fontSize: VueTypes.string.def('base'),
  },
};

</script>
