<template>
  <div class="pb-4 lg:pb-0">
    <ui-title :type="type === 'secondary' ? 'h2' : 'h1'">
      <slot />
    </ui-title>
    <ui-divider type="small" />
  </div>
</template>

<script>

import VueTypes from 'vue-types';
import { UiTitle, UiDivider } from '~/components/atoms';

export default {
  components: {
    UiTitle,
    UiDivider,
  },
  props: {
    type: VueTypes.oneOf(['primary', 'secondary']).def('primary'),
  },
};
</script>
