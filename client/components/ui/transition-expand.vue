<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'UiTransitionExpand',

  methods: {
    enter(element) {
      const { width } = getComputedStyle(element);

      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const { height } = getComputedStyle(element);

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      setTimeout(() => {
        element.style.height = height;
      });
    },

    afterEnter(element) {
      element.style.height = 'auto';
    },

    leave(element) {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      setTimeout(() => {
        element.style.height = 0;
      });
    },
  },
};
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
  transition: height 0.25s linear;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}

* {
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  will-change: height;
}
</style>
