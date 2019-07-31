<template>
  <ui-card space="none">
    <ui-title
      type="h4"
      class="m-4"
    >
      {{ title }}
    </ui-title>
    <ui-divider />
    <div class="m-4">
      <p :class="['mb-4', {'truncate-5-lines md:truncate-3-lines': !showAll }]">{{ content }}</p>
      <ui-link @click.native="showAll = !showAll">
        {{ $t(`general.show-${showAll ? 'less' : 'more'}`) }}
      </ui-link>
    </div>
  </ui-card>
</template>

<script>

import VueTypes from 'vue-types';

import {
  UiTitle, UiDivider, UiCard, UiLink,
} from '~/components/atoms';

export default {
  components: {
    UiTitle,
    UiCard,
    UiLink,
    UiDivider,
  },
  props: {
    content: VueTypes.string.def(''),
    title: VueTypes.string.def(''),
  },
  data() {
    return {
      showAll: false,
    };
  },
};
</script>
