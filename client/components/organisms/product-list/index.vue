<template>
  <container>
    <row>
      <column class="w-full">
        <main-title>{{ title }}</main-title>
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
        />
      </column>
    </row>
  </container>
</template>

<script>
import VueTypes from 'vue-types';
import { MainTitle, ProductCard } from '~/components/molecules';
import { Row, Column } from '~/components/grid';

export default {
  components: {
    MainTitle,
    ProductCard,
    Row,
    Column,
  },
  props: {
    products: VueTypes.array.def([]),
    title: VueTypes.string.def(''),
  },
};

</script>
