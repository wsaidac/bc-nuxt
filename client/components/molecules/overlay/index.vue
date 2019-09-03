<template>
  <portal :to="name">
    <div
      class="fixed inset-0 z-50 bg-overlay p-4 flex justify-center items-center"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <section
        v-click-outside="onOverlayClose"
        role="dialog"
        :aria-labelledby="title"
        :aria-describedby="desc"
        class="relative max-h-full overflow-scroll bg-white rounded-lg w-full md:w-40 lg:w-40 xl:w-40 lg:w-40 p-5"
      >
        <button-icon
          color="black"
          icon="close"
          font-size="xs"
          class="absolute top-4 right-4"
          @click="onOverlayClose"
        />
        <slot />
      </section>
    </div>
  </portal>
</template>

<script>
import VueTypes from 'vue-types';

import { ButtonIcon } from '~/components/atoms';

export default {
  components: { ButtonIcon },
  props: {
    title: VueTypes.string.def(''),
    desc: VueTypes.string.def(''),
    name: VueTypes.string.def('Overlay'),
  },
  methods: {
    onOverlayClose() {
      this.$store.dispatch('ui/toggleOverlay', { visibility: 'hidden', name: '' });
    },
  },
};
</script>
