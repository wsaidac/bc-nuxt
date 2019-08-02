<template>
  <ui-card>
    <div
      v-if="description"
      class="html-injected"
      v-html="description"
    />
  </ui-card>
</template>

<script>

import VueTypes from 'vue-types';
import { UiCard } from '~/components/atoms';

export default {
  components: {
    UiCard,
  },
  props: {
    title: VueTypes.string.def(''),
    description: VueTypes.string.def(''),
  },
};
</script>
