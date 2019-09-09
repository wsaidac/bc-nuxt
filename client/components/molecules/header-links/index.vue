<template>
  <nav>
    <ul class="flex">
      <li
        v-for="(category, index) in items"
        :key="index"
        class="mr-6 text-base font-semibold"
      >
        <ui-link
          color="primary"
          :url="category.url"
          data-test="header-link"
        >
          {{ category.title }}
        </ui-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import VueTypes from 'vue-types';
import { UiLink } from '~/components/atoms';

export default {
  components: {
    UiLink,
  },
  props: {
    items: VueTypes.arrayOf(Object).def([]),
  },
};

</script>
