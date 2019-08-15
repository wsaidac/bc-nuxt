<template>
  <ul class="flex py-4 justify-center md:justify-start border-gray border lg:border-0">
    <li
      v-for="(link, index) in links"
      :key="index"
      class="pr-4 last:pr-0"
    >
      <ui-link
        color="gray-black"
        :url="link.url"
      >
        {{ link.title }}
      </ui-link>
    </li>
  </ul>
</template>

<script>
import VueTypes from 'vue-types';
import { UiLink } from '~/components/atoms';

export default {
  components: {
    UiLink,
  },
  props: {
    links: VueTypes.arrayOf(
      VueTypes.shape({
        title: String,
        url: String,
      }),
    ).def([]),
  },
};

</script>
