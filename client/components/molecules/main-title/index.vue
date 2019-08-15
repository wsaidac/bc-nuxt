<template>
  <div class="pb-4 lg:pb-0">
    <ui-title :type="type === 'secondary' ? 'h2' : 'h1'">
      <slot />
    </ui-title>
    <divider
      type="small"
      class="mt-4 mb-6"
    />
  </div>
</template>

<script>

import VueTypes from 'vue-types';
import { UiTitle, Divider } from '~/components/atoms';

export default {
  components: {
    UiTitle,
    Divider,
  },
  props: {
    type: VueTypes.oneOf(['primary', 'secondary']).def('primary'),
  },
};
</script>
