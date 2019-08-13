<template>
  <div class="border-b border-gray w-full relative">
    <collapsable>
      <template v-slot:header>
        <p>{{ title }}</p>
      </template>
      <template v-slot:content>
        <divider />
        <ul v-if="links.length">
          <li
            v-for="(link, i) in links"
            :key="i"
          >
            <ui-link
              :url="link.url"
              wrapper
              class="flex items-center justify-between w-full p-4 border-b border-gray"
            >
              <p class="text-gray-black">{{ link.title }}</p>
              <icon icon="breadcrumb" />
            </ui-link>
          </li>
        </ul>
      </template>
    </collapsable>
  </div>
</template>

<script>

import VueTypes from 'vue-types';
import {
  Divider, Collapsable, UiLink, Icon,
} from '~/components/atoms';

export default {
  components: {
    Divider,
    Collapsable,
    UiLink,
    Icon,
  },
  props: {
    title: VueTypes.string.def(''),
    links: VueTypes.array.def([]),
  },
};
</script>
