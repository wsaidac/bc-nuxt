<template>
  <fragment>
    <brand-list :category="list" />
  </fragment>
</template>

<script>

import { get } from 'lodash';
import VueTypes from 'vue-types';
import { BrandList } from '~/components/organisms';

export default {
  components: {
    BrandList,
  },
  props: {
    products: VueTypes.object.def({}),
  },
  computed: {
    brands() {
      const { items } = this.products;
      // @TODO: It process should have done in API Hub
      return items.map(item => ({
        image: get(item, 'image') || get(item, 'category.categoryHeader.image', ''),
        title: get(item, 'category.categoryHeader.title', ''),
      }));
    },
    title() {
      return get(this, 'products.title');
    },
    list() {
      return {
        title: this.title,
        brands: this.brands,
      };
    },

  },
};
</script>
