<template>
  <el-collapse-item
    v-bind="$attrs"
    :title="titleAttr"
    v-on="$listeners"
  >
    <div
      v-if="titleDesign === 'form-toggle'"
      slot="title"
      class="ui-collapse-item__title-form-toggle"
    >
      <div
        class="label"
        v-text="title.label"
      />
      <div
        class="value"
        v-text="title.value"
      />
      <div
        class="toggle"
        v-text="title.toggle"
      />
    </div>
    <template
      v-for="(nodes, slot) in $slots"
      :slot="slot"
    >
      <slot :name="slot" />
    </template>
  </el-collapse-item>
</template>

<script>
import ElCollapseItem from 'element-ui/lib/collapse-item.js';

export default {
  name: 'UiCollapseItem',

  components: {
    ElCollapseItem,
  },

  props: {
    titleDesign: {
      type: String,
      default: 'default',
    },
    title: {
      type: [String, Object],
      default: null,
    },
  },

  computed: {
    titleAttr() {
      return typeof this.title === 'string' ? this.title : null;
    },
  },
};
</script>

<style lang="scss">
@import 'element-ui/packages/theme-chalk/src/collapse-item.scss';
</style>
