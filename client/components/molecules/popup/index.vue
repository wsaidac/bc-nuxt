<template>
  <card
    space="none"
    class="max-w-xl"
  >
    <div class="flex p-4 mb:items-center justify-between">
      <ui-title type="h4">
        <icon
          v-if="type === 'warning'"
          icon="warning"
          color="error"
          font-size="xl"
          class="text-center pr-2"
        />
        {{ title }}
      </ui-title>
      <icon
        icon="close"
        color="primary"
        class="cursor-pointer"
        @click="$emit('popup__close:click')"
      />
    </div>
    <divider />
    <div class="p-4">
      <p class="pb-6">{{ description }}</p>
      <div class="flex flex-wrap flex-col-reverse md:flex-row">
        <ui-button
          v-if="secondaryButtonText"
          justify
          type="secondary"
          class="md:mr-4 mt-4 md:mt-0"
          @click="$emit('popup__secondary-button:click')"
        >
          {{ secondaryButtonText }}
        </ui-button>
        <ui-button
          justify
          @click="$emit('popup__main-button:click')"
        >
          {{ mainButtonText }}
        </ui-button>
      </div>
    </div>
  </card>
</template>

<script>
import VueTypes from 'vue-types';

import {
  Card, Divider, UiTitle, Icon, UiButton,
} from '~/components/atoms';

export default {
  components: {
    Card,
    Divider,
    UiTitle,
    UiButton,
    Icon,
  },
  props: {
    title: VueTypes.string.def(''),
    description: VueTypes.string.def(''),
    mainButtonText: VueTypes.string.def(''),
    secondaryButtonText: VueTypes.string.def(''),
    type: VueTypes.oneOf(['warning']),
  },
};

</script>
