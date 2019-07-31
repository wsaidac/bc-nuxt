<template>
  <ul
    v-if="list.length"
    class="flex"
  >
    <li
      v-for="method in list"
      :key="method.name"
      class="pr-4"
    >
      <ui-link
        :to="link"
        :title="`${$t('footer.safely-order-with')} ${method.name}`"
      >
        <ui-image
          :src="method.image"
          :alt="method.name"
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
