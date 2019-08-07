<template>
  <card
    space="none"
    class="hover:border-gray-dark"
  >
    <div
      class=" p-4 flex justify-between items-center w-full cursor-pointer"
      @click="onToggleAnswer"
    >
      <ui-title type="h4">{{ question }}</ui-title>
      <icon
        :icon="icon"
        :class="[
          'transition-all transition-200 -rotate-90',
          {'-rotate-90': showAnswer},
          {'rotate-90': !showAnswer }
        ]"
      />
    </div>
    <smooth-wrapper>
      <div v-if="showAnswer">
        <divider />
        <p
          class="p-4 html-injected"
          v-html="answer"
        />
      </div>
    </smooth-wrapper>
  </card>
</template>

<script>

import VueTypes from 'vue-types';
import {
  Card, UiTitle, Divider, Icon,
} from '~/components/atoms';
import SmoothWrapper from '~/components/utils/smooth-wrapper';

export default {
  components: {
    Card,
    UiTitle,
    Divider,
    Icon,
    SmoothWrapper,
  },
  props: {
    question: VueTypes.string.def(''),
    answer: VueTypes.string.def(''),
  },
  data() {
    return {
      showAnswer: false,
      icon: 'plus',
    };
  },
  methods: {
    onToggleAnswer() {
      this.showAnswer = !this.showAnswer;
      this.icon = this.icon === 'plus' ? 'min' : 'plus';
    },
  },
};
</script>
