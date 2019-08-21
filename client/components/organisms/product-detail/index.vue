<template>
  <section
    class="bg-white"
    itemscope
    itemtype="http://schema.org/Product"
  >
    <container>
      <row>
        <column class="w-full">
          <breadcrumbs />
        </column>
      </row>
      <row
        wrap
        class="flex-col-reverse lg:flex-row"
      >
        <column class="w-full lg:w-4/12">
          <div class="mt-5 flex-auto flex flex-col">
            <main-title>{{ product.title }}</main-title>
            <div class="bg-success p-2">trustpilot widget</div>
            <divider />
            <p
              v-if="product.description"
              class="html-injected p-4 flex-1"
              v-html="product.description"
            />
            <divider />
            <product-card-cta
              :value="product.value"
              :service-fee="product.serviceFee"
              @product-card-cta:click="$emit('product-card:click', product.rapidoId)"
            />
          </div>
        </column>
        <column class="w-full lg:w-8/12 relative">
          <picture class="overflow-hidden rounded h-full border border-gray">
            <ui-image
              class=" blur"
              height="full"
              width="auto"
              itemprop="image"
              :src="imageBg"
            />
          </picture>

          <div class="absolute inset-0 flex justify-center items-center">
            <div class="rounded p-4 bg-white shadow-xl">
              <ui-image :src="product.image" />
            </div>
          </div>
        </column>
      </row>
      <row>
        <column class="w-full lg:w-3/12">
          <divider />
          <usps
            :text="uspsItem"
            class="m-4"
          />
        </column>
      </row>
    </container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import VueTypes from 'vue-types';

import { get, isObject } from 'lodash';

import {
  Divider, UiImage, Usps,
} from '~/components/atoms';
import { MainTitle, Breadcrumbs, ProductCardCta } from '~/components/molecules';
import { Container, Column, Row } from '~/components/grid';

export default {
  components: {
    Divider,
    UiImage,
    Usps,
    Breadcrumbs,
    MainTitle,
    ProductCardCta,
    Container,
    Column,
    Row,
  },
  props: {
    product: VueTypes.shape({
      description: VueTypes.string.def(''),
      serviceFee: VueTypes.string.def(''),
      banner: VueTypes.oneOfType([Object, String]).def({}),
      image: VueTypes.oneOfType([Object, String]).def({}),
      title: VueTypes.string.def(''),
      value: VueTypes.string.def(''),
    }).def({}),
  },
  computed: {
    ...mapGetters('shared', ['usps']),
    uspsItem() {
      return get(this, 'usps.items[0].text', '');
    },
    imageBg() {
      const { banner } = this.product;
      if (isObject(banner)) {
        return banner.mobile ? banner.mobile : banner.regular;
      }
      return banner;
    },
  },
};
</script>
