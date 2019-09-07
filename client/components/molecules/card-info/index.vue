<template>
  <card space="none">
    <ui-title
      type="h4"
      class="m-4"
    >
      {{ info.title }}
    </ui-title>
    <divider />
    <div class="m-4">
      <p :class="['mb-4', {'truncate-5-lines md:truncate-3-lines': !showAll }]">{{ info.text }}</p>
      <ui-link
        data-test="card-info-link"
        @click.native="showAll = !showAll"
      >
        {{ $t(`general.show-${showAll ? 'less' : 'more'}`) }}
      </ui-link>
    </div>
  </card>
</template>

<script>

import VueTypes from 'vue-types';

import {
  UiTitle, Divider, Card, UiLink,
} from '~/components/atoms';

export default {
  components: {
    UiTitle,
    Card,
    UiLink,
    Divider,
  },
  props: {
    info: VueTypes.shape({
      text: VueTypes.string.def(''),
      title: VueTypes.string.def(''),
    }).def({}).loose,
  },
  data() {
    return {
      showAll: false,
    };
  },
};
</script>
