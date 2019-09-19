<template>
  <fragment>
    <row>
      <column class="w-full">
        <main-title type="secondary">{{ title }}</main-title>
      </column>
    </row>
    <row wrap>
      <column
        v-for="(product, index) in products"
        :key="index"
        class="w-full md:w-1/2 lg:w-1/3"
      >
        <product-card
          :id="index"
          :product="product"
          :usps="uspsText"
        />
      </column>
      <column
        v-if="brandInfo"
        class="w-full md:w-1/2 lg:w-1/3"
      >
        <brand-box :brand="brandInfo" />
      </column>
    </row>
  </fragment>
</template>

<script>
import { mapGetters } from 'vuex';
import VueTypes from 'vue-types';
import { get } from 'lodash';

import { MainTitle, ProductCard, BrandBox } from '~/components/molecules';
import { Row, Column } from '~/components/grid';

export default {
  components: {
    MainTitle,
    ProductCard,
    BrandBox,
    Row,
    Column,
  },
  props: {
    products: VueTypes.array.def([]),
    brandInfo: VueTypes.object,
    title: VueTypes.string.def(''),
    maxLen: VueTypes.number,
  },
  computed: {
    ...mapGetters('shared', ['usps']),
    uspsText() {
      return get(this, 'usps.items[0].text', {});
    },
    exceedMaxLen() {
      return this.maxLen > 0 && this.products.length >= this.maxLen;
    },
    limitedProducts() {
      const { exceedMaxLen, limit, products } = this;
      return exceedMaxLen ? products.slice(0, limit) : products;
    },
  },
};

</script>
