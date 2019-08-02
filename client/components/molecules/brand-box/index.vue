<template>
  <ui-card
    class="flex-col flex justify-between"
    space="none"
  >
    <ui-link class="w-full flex-1 flex items-center">
      <ui-image
        :src="brand.logoSrc"
        :alt="brand.name"
        width="auto"
        class="mx-auto"
      />
    </ui-link>
    <ui-divider />
    <ui-link
      :url="brand.slug"
      class="m-4"
    >
      {{ $t('brand_box.link_name', { brandName: brand.name }) }}
    </ui-link>
  </ui-card>
</template>
<script>
import VueTypes from 'vue-types';

import {
  UiImage,
  UiLink,
  UiCard,
  UiDivider,
} from '~/components/atoms';

export default {
  components: {
    UiImage,
    UiLink,
    UiCard,
    UiDivider,
  },
  props: {
    brand: VueTypes.shape({
      name: VueTypes.string.def(''),
      logoSrc: VueTypes.string.def(''),
      slug: VueTypes.string.def(''),
    }).def({}),
  },
};
</script>
