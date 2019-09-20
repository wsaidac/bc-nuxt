<template>
  <card
    class="flex-col flex justify-between"
    space="none"
  >
    <ui-link
      class="w-full flex-1 flex items-center"
      :aria-label="$t('components.brand_box.link_name', { brandName: brand.name })"
    >
      <ui-image
        :src="brand.logoSrc"
        :alt="brand.name"
        width="auto"
        class="mx-auto"
      />
    </ui-link>
    <divider />
    <ui-link
      :url="brand.slug"
      class="m-4"
      data-test="brand-box-link"
    >
      {{ $t('components.brand_box.link_name', { brandName: brand.name }) }}
    </ui-link>
  </card>
</template>
<script>
import VueTypes from 'vue-types';

import {
  UiImage,
  UiLink,
  Card,
  Divider,
} from '~/components/atoms';

export default {
  components: {
    UiImage,
    UiLink,
    Card,
    Divider,
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
