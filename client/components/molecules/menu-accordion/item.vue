<template>
  <li
    :aria-label="ariaLabel"
    class="px-6 flex justify-between items-center border-b border-gray w-full cursor-pointer"
    @click="$emit('menu-accordion-item:click', slug, url)"
  >
    <div class="flex items-center">
      <icon
        v-if="icon"
        :icon="icon"
        font-size="5xl"
        color="accent"
        class="mr-4"
      />
      <p
        class="p-4 pl-0"
        aria-hidden="true"
      >
        {{ title }}
      </p>
    </div>
    <icon icon="breadcrumb" />
  </li>
</template>

<script>
import VueTypes from 'vue-types';

import { Icon } from '~/components/atoms';


export default {
  components: {
    Icon,
  },
  props: {
    slug: VueTypes.string.def(''),
    url: VueTypes.string.def(''),
    icon: VueTypes.string.def(''),
    title: VueTypes.string.def(''),
    type: VueTypes.oneOf(['link', 'button']).def('button'),
  },
  computed: {
    ariaLabel() {
      const { type, $t, title } = this;
      return $t(`general.${type === 'link' ? 'go-to' : 'select '}`, { label: title });
    },
  },
};

</script>
