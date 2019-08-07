<template>
  <card
    space="none"
    class="hover:border-gray-dark"
  >
    <collapsable>
      <template v-slot:header>
        <ui-title type="h4">{{ question }}</ui-title>
      </template>
      <template v-slot:content>
        <divider />
        <p
          class="p-4 html-injected"
          v-html="answer"
        />
      </template>
    </collapsable>
  </card>
</template>

<script>

import VueTypes from 'vue-types';
import {
  Card, Divider, Collapsable, UiTitle,
} from '~/components/atoms';

export default {
  components: {
    Card,
    Divider,
    Collapsable,
    UiTitle,
  },
  props: {
    question: VueTypes.string.def(''),
    answer: VueTypes.string.def(''),
  },
};
</script>
