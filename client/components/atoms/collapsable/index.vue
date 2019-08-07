<template>
  <div>
    <div
      :id="id"
      class=" p-4 flex justify-between items-center w-full cursor-pointer focus:outline-none"
      role="button"
      tabindex="0"
      :aria-expanded="ariaExpanded"
      :aria-controls="`${id}-region`"
      @click="onToggleContent"
    >
      <slot name="header" />
      <icon
        :icon="icon"
        :class="[
          'transition-all transition-200 -rotate-90',
          {'-rotate-90': showContent },
          {'rotate-90': !showContent }
        ]"
      />
    </div>
    <smooth-wrapper>
      <div
        v-if="showContent"
        :id="`${id}-region`"
        role="region"
        :aria-labelledby="id"
      >
        <slot name="content" />
      </div>
    </smooth-wrapper>
  </div>
</template>

<script>

import uuid from 'uuid/v1';


import {
  Icon,
} from '~/components/atoms';
import SmoothWrapper from '~/components/utils/smooth-wrapper';

export default {
  components: {
    Icon,
    SmoothWrapper,
  },
  props: {
    showInitialContent: Boolean,
  },
  data() {
    return {
      showContent: this.showInitialContent,
      icon: 'plus',
    };
  },
  computed: {
    ariaExpanded() {
      return this.showInitialContent.toString();
    },
    id() {
      return uuid();
    },
  },
  methods: {
    onToggleContent() {
      this.showContent = !this.showContent;
      this.icon = this.icon === 'plus' ? 'min' : 'plus';
    },
  },
};
</script>
