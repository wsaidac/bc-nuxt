<template>
  <card
    space="none"
    class="relative flex flex-wrap"
  >
    <div class="w-full md:w-5/12">
      <ui-image
        :src="product.image"
        height="48"
        class="min-h-full lg:h-54"
        aria-hidden="true"
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
      <ui-button
        data-test="featured-card-button"
        @click="$emit('feature-card:click')"
      >
        {{ product.buttonText }}
      </ui-button>
    </div>
  </card>
</template>

<script>
import VueTypes from 'vue-types';

import {
  Card, UiButton, UiImage, UiTitle,
} from '~/components/atoms';

export default {
  components: {
    Card,
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
