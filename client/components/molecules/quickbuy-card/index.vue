<template>
  <card
    space="none"
    class="mb-4"
  >
    <banner-image
      :src="image"
      :alt="alt"
      :brand="brand"
      height="48"
    />
    <div class="p-4">
      <ui-title type="h3">{{ title }}</ui-title>
      <ui-button
        justify
        class="mt-4"
      >
        {{ buttonText }}
      </ui-button>
    </div>
  </card>
</template>


<script>
import VueTypes from 'vue-types';
import { get } from 'lodash';

import {
  Card, UiTitle, UiButton,
} from '~/components/atoms';

import { BannerImage } from '~/components/molecules';

export default {
  components: {
    Card,
    UiTitle,
    UiButton,
    BannerImage,
  },
  props: {
    image: VueTypes.oneOf([String, Object]).def('#'),
    title: VueTypes.string.def(''),
    buttonText: VueTypes.string.def(''),
    brand: VueTypes.shape({
      src: VueTypes.oneOf([Object, String]).def(''),
      alt: VueTypes.string.def(''),
    }),
  },
  computed: {
    alt() {
      return get(this, 'image.alt', this.title);
    },
  },
};
</script>
