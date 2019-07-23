<template>
  <div
    v-if="list.length"
    class="flex flex-col md:flex-row relative justify-center w-full"
  >
    <usps
      v-for="(item, index) in list"
      :key="index"
      :class="[
        'text-center md:text-length md:pr-4 lg:pr-6',
        (index === defaultUsps) ? '' : 'hidden md:block'
      ]"
      :text="item"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';


import { Usps } from '~/components/atoms';

export default {
  components: {
    Usps,
  },
  props: {
    list: VueTypes.arrayOf(String).def([]),
    defaultUsps: VueTypes.number.def(0),
  },
};
</script>
