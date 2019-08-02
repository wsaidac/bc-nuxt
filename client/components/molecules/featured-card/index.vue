<template>
  <ui-card
    space="none"
    class="relative flex flex-wrap"
  >
    <div class="w-full md:w-5/12">
      <ui-image
        :src="product.image"
        height="48"
        class="lg:h-54"
      />
    </div>
    <div class="w-full md:w-7/12 p-6">
      <ui-title
        type="h3"
        class="mb-4"
      >
        {{ product.title }}
      </ui-title>
      <p class="mb-4">{{ product.description }}</p>
      <ui-button @click="$emit('feature-card:click')">{{ product.buttonText }}</ui-button>
    </div>
  </ui-card>
</template>

<script>
import VueTypes from 'vue-types';

import {
  UiCard, UiButton, UiImage, UiTitle,
} from '~/components/atoms';

export default {
  components: {
    UiCard,
    UiButton,
    UiImage,
    UiTitle,
  },
  props: {
    product: VueTypes.shape({
      title: VueTypes.string.def(''),
      description: VueTypes.string.def(''),
      image: VueTypes.oneOfType([String, Object]),
      buttonText: VueTypes.string.def(''),
    }),
  },
};
</script>
