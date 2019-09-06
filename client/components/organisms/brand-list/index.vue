<template>
  <div class="mb-6">
    <row>
      <column class="w-full lg:w-2/3">
        <main-title type="secondary">{{ category.title }}</main-title>
      </column>
      <column
        v-if="category.showMore && ($mq === 'md' || $mq == 'lg')"
        class="hidden md:flex md:w-1/3 items-end justify-end"
      >
        <ui-link
          class="mb-6"
          :url="category.url"
        >
          {{ $t('general.view_all') }}
        </ui-link>
      </column>
    </row>
    <row
      wrap
      class="md:flex-no-wrap"
    >
      <column
        v-for="(brand, index) in category.brands"
        :key="index"
        class="w-1/2 md:w-1/4 lg:w-1/6 md:flex-none"
      >
        <category-card :category="brand" />
      </column>
    </row>
    <row v-if="category.showMore && $mq === 'sm'">
      <column class="w-full">
        <ui-link
          class="mb-6"
          :url="category.url"
        >
          {{ $t('general.view_all') }}
        </ui-link>
      </column>
    </row>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { MainTitle, CategoryCard } from '~/components/molecules';
import { UiLink } from '~/components/atoms';
import { Row, Column } from '~/components/grid';

export default {
  components: {
    MainTitle,
    CategoryCard,
    Row,
    Column,
    UiLink,
  },
  props: {
    category: VueTypes.shape({
      brands: VueTypes.array.def([]),
      slug: VueTypes.string.def(''),
      title: VueTypes.string.def(''),
      url: VueTypes.string.def(''),
      image: VueTypes.object.def({}),
      showMore: Boolean,
    }).def({}),
  },

};
</script>
