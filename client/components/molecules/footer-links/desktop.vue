<template>
  <div>
    <ui-title
      type="h4"
      class="pb-4"
    >
      {{ title }}
    </ui-title>
    <ul>
      <li
        v-for="(link, i) in links"
        :key="i"
      >
        <ui-link
          :url="link.url"
          color="gray-black"
        >
          {{ link.title }}
        </ui-link>
      </li>
    </ul>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { UiLink, UiTitle } from '~/components/atoms';

export default {
  components: {
    UiLink,
    UiTitle,
  },
  props: {
    title: VueTypes.string.def(''),
    links: VueTypes.array.def([]),
  },
};

</script>
