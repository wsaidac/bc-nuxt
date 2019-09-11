<template>
  <card
    space="none"
    class="mb-4"
    tabindex="0"
    :aria-label="card.title"
  >
    <banner-image
      aria-hidden="true"
      :src="card.image"
      :alt="card.alt"
      :brand="card.brand"
      type="card"
      height="48"
    />
    <div class="p-4">
      <ui-title type="h3">{{ card.title }}</ui-title>
      <ui-button
        justify
        class="mt-4"
        data-test="quick-buy-button"
      >
        {{ card.buttonText }}
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


const BannerImage = () => import('~/components/molecules/banner-image');


export default {
  components: {
    Card,
    UiTitle,
    UiButton,
    BannerImage,
  },
  props: {
    card: VueTypes.shape({
      image: VueTypes.oneOfType([String, Object]).def('#'),
      title: VueTypes.string.def(''),
      buttonText: VueTypes.string.def(''),
      brand: VueTypes.shape({
        src: VueTypes.oneOfType([Object, String]).def(''),
        alt: VueTypes.string.def(''),
      }),
    }).loose.def({}),
  },
  computed: {
    alt() {
      return get(this, 'image.alt', this.title);
    },
  },
};
</script>
