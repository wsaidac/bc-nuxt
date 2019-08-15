<template>
  <ul>
    <item
      v-for="item in list"
      :key="item.slug"
      :label="item.label"
      :icon="item.icon"
    />
  </ul>
</template>

<script>
import VueTypes from 'vue-types';

import Item from './item';

export default {
  components: {
    Item,
  },
  props: {
    list: VueTypes.array.def([]),
  },
};

</script>
