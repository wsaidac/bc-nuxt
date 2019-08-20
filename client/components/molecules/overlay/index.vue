<template>
  <div v-if="state === 'visible'">
    <section
      role="dialog"
      :aria-labelledby="title"
      :aria-describedby="desc"
    >
      <slot @overlay__close:click="onOverlayClose" />
    </section>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    title: VueTypes.string.def('#'),
    desc: VueTypes.arrayOf(Object).def([]),
    state: VueTypes.string.def('hidden'),
  },
  methods: {
    onOverlayClose() {
      this.state = 'hidden';
    },
  },
};
</script>
