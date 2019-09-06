<template>
  <card
    space="none"
    class="mb-5 flex-auto flex flex-col bg-white"
    :aria-labelledby="`product-card-title-${product.id}`"
  >
    <div class="flex w-full items-center justify-between px-4">
      <ui-image
        :src="product.image"
        :alt="altText"
        height="12"
        width="28"
        contain
        position="left"
      />
      <tag v-if="product.isPopular" />
    </div>
    <divider />
    <div class="flex-1">
      <ui-title
        :id="`product-card-title-${product.id}`"
        class="m-4"
        type="h4"
        bold
      >
        {{ product.title }}
      </ui-title>
      <div
        v-if="product.content"
        class="html-injected px-4 pb-4"
        v-html="product.content"
      />
    </div>
    <divider />
    <product-card-cta
      :value="product.value"
      :service-fee="product.serviceFee"
      @product-card-cta:click="$emit('product-card:click', product.id)"
    />
    <divider v-if="product.usps" />
    <usps
      v-if="product.usps"
      :text="product.usps"
      class="m-4"
    />
  </card>
</template>

<script>

import VueTypes from 'vue-types';
import {
  Card, Divider, UiImage, UiTitle, Usps, Tag,
} from '~/components/atoms';
import { ProductCardCta } from '~/components/molecules';

export default {
  components: {
    Card,
    Divider,
    UiImage,
    UiTitle,
    Usps,
    Tag,
    ProductCardCta,
  },
  props: {
    product: VueTypes.shape({
      id: VueTypes.string.def(''),
      title: VueTypes.string.def(''),
      content: VueTypes.string.def(''),
      image: VueTypes.oneOfType([String, Object]).def(''),
      alt: VueTypes.string.def(''),
      value: VueTypes.string.def(''),
      usps: VueTypes.string.def(''),
      serviceFee: VueTypes.string.def(''),
      buttonText: VueTypes.string.def(''),
      isPopular: Boolean,
    }).def({}).loose,
  },
  computed: {
    altText() {
      const { alt, title } = this.product;
      return alt || title;
    },
  },
};
</script>
