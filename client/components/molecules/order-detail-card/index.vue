<template>
  <card>
    <div
      v-if="description"
      class="html-injected"
      v-html="description"
    />
  </card>
</template>

<script>

import VueTypes from 'vue-types';
import { Card } from '~/components/atoms';

export default {
  components: {
    Card,
  },
  props: {
    title: VueTypes.string.def(''),
    description: VueTypes.string.def(''),
  },
};
</script>
