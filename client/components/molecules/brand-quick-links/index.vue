<template>
  <card class="flex flex-col lg:flex-row">
    <ui-title
      class="lg:inline-block pr-2"
      type="h4"
    >
      {{ $t('renasci.molecules.brand_quick_links.fast_to' ) }}
    </ui-title>
    <ui-link
      v-for="(link, index) in links"
      :key="index"
      v-scroll-to="link.scrollPath"
      url="#"
      class="pr-4"
    >
      {{ link.title }}
    </ui-link>
  </card>
</template>

<script>
import VueTypes from 'vue-types';
import { Card, UiTitle, UiLink } from '~/components/atoms';

export default {
  components: {
    Card,
    UiTitle,
    UiLink,
  },
  props: {
    links: VueTypes.arrayOf(Object).def([]),
  },
};
</script>
