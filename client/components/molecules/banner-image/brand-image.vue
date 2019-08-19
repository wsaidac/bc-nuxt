<template>
  <div
    class="absolute bottom-0 let-0 bg-white rounded-tr p-1 flex justify-center"
    :class="`w-${width}`"
  >
    <ui-image
      :src="src"
      :height="height"
      width="auto"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    src: VueTypes.object.def({}),
    height: VueTypes.string.def('auto'),
    width: VueTypes.string.def('auto'),
  },
};

</script>
