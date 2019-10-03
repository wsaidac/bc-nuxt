<template>
  <ul
    v-if="list.length"
    class="flex py-4 items-center justify-center lg:justify-end"
  >
    <li
      v-for="method in list"
      :key="method.name"
      class="pr-4 last:pr-0"
    >
      <ui-link
        :to="link"
        :title="$t('renasci.molecules.payment_methods.safely_order_with', { method: method.name })"
      >
        <ui-image
          :src="method.image"
          :alt="method.name"
          height="10"
          width="10"
        />
      </ui-link>
    </li>
  </ul>
</template>

<script>
import VueTypes from 'vue-types';
import { UiImage, UiLink } from '~/components/atoms';

export default {
  components: {
    UiImage,
    UiLink,
  },
  props: {
    link: VueTypes.string.def('#'),
    list: VueTypes.arrayOf(Object).def([]),
  },
};
</script>
