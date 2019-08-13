<template>
  <component
    :is="componentName"
    :title="title"
    :links="links"
  />
</template>

<script>
import VueTypes from 'vue-types';

import Mobile from './mobile';
import Desktop from './desktop';

export default {
  components: {
    Mobile,
    Desktop,
  },
  props: {
    title: VueTypes.string.def(''),
    links: VueTypes.array.def([]),
  },
  computed: {
    componentName() {
      return this.$mq === 'sm' ? 'mobile' : 'desktop';
    },
  },
};

</script>
