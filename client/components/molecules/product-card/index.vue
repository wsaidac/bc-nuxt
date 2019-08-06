<template>
  <card
    space="none"
    class="mb-5 flex-auto flex flex-col"
  >
    <div class="flex w-full items-center justify-between px-4">
      <ui-image
        :src="product.image"
        :alt="altText"
        height="12"
        width="18"
      />
      <tag v-if="product.isPopular" />
    </div>
    <divider />
    <div class="flex-1">
      <ui-title
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
    <div class="m-4">
      <div class="flex justify-between items-center mb-4">
        <ui-title
          type="h2"
          class="font-extrabold"
        >
          {{ product.value }}
        </ui-title>
        <p class="text-gray-black text-right leading-none font-light text-xs lg:text-lg">
          {{ `+ ${product.serviceFee}` }}
          <br>
          {{ `servicekosten` }}
        </p>
      </div>
      <ui-button
        justify
        @click.prevent="$emit('product-card:click', product.id)"
      >
        {{ product.buttonText }}
      </ui-button>
    </div>
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
  Card, Divider, UiImage, UiButton, UiTitle, Usps, Tag,
} from '~/components/atoms';

export default {
  components: {
    Card,
    Divider,
    UiImage,
    UiButton,
    UiTitle,
    Usps,
    Tag,
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
    }).def({}),
  },
  computed: {
    altText() {
      const { alt, title } = this.product;
      return alt || title;
    },
  },
};
</script>
