<template>
  <layout>
    <template v-slot:banner>
      <home-banner :header="post.header" />
    </template>
    <template v-slot:content>
      <popular-products :products="post.popularProducts" />
      <category-list />
      <row>
        <column class="w-full">
          <quickbuy-card :card="post.highlighted" />
        </column>
      </row>
    </template>
  </layout>
</template>

<script>
import VueTypes from 'vue-types';

import Layout from './layout';
import {
  HomeBanner, CategoryList, PopularProducts,
} from '~/components/organisms';
import { Row, Column } from '~/components/grid';

// import { QuickbuyCard } from ;
const QuickbuyCard = () => import('~/components/molecules/quickbuy-card');

export default {
  components: {
    HomeBanner,
    CategoryList,
    PopularProducts,
    QuickbuyCard,
    Row,
    Column,
    Layout,
  },
  props: {
    post: VueTypes.object.def({
      header: VueTypes.object,
      popularProducts: VueTypes.object,
      highlighted: VueTypes.object,
    }),
  },
};

</script>
