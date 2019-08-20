<template>
  <ul>
    <item
      v-for="(item, i) in list"
      :key="i"
      :slug="item.slug"
      :title="item.title"
      :icon="item.icon"
      :url="item.url"
      :type="type"
      tabindex="0"
      @menu-accordion-item:click="onClickItem"
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
    type: VueTypes.oneOf(['link', 'button']).def('button'),
  },
  methods: {
    onClickItem(slug, url) {
      if (this.type === 'link') {
        this.$router.push(this.localePath(url));
        return;
      }

      this.$emit('menu-accordion__item:click', slug);
    },
  },
};

</script>
