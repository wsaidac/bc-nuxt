<template>
  <div class="-ml-4 md:ml-0">
    <card
      space="wide"
      class="max-w-xs lg:max-w-xl"
    >
      <div class="pb-4 lg:pb-0">
        <ui-title>{{ title }}</ui-title>
      </div>
      <divider
        type="small"
        class="hidden lg:block mt-4 mb-6"
      />
      <p class="hidden lg:block pb-4">{{ description }}</p>
      <ui-button @click.prevent="$emit('banner-card:click')">{{ buttonText }}</ui-button>
    </card>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import {
  UiButton,
  Card,
  Divider,
  UiTitle,
} from '~/components/atoms';


export default {
  components: {
    UiButton,
    Card,
    Divider,
    UiTitle,
  },
  props: {
    title: VueTypes.string.def(''),
    description: VueTypes.string.def(''),
    buttonText: VueTypes.string.def(''),
  },
};
</script>
