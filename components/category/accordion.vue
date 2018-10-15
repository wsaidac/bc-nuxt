<template>
  <div class="category-accordion">
    <ui-collapse>
      <ui-collapse-item title="Benefits">
        <cg-usps
          :usps="usps"
          mode="vertical"
        />
      </ui-collapse-item>
      <ui-collapse-item
        v-for="(slide, index) in slides"
        :key="index"
        :title="slide.title">
        {{ slide.content }}
      </ui-collapse-item>
    </ui-collapse>
  </div>
</template>

<script>
import { UiCollapse, UiCollapseItem } from '~/components/ui';
import CgUsps from '~/components/usps';

export default {
  name: 'CategoryAccordion',

  components: {
    UiCollapse,
    UiCollapseItem,
    CgUsps,
  },

  props: {
    usps: {
      type: Array,
      default() {
        return [];
      },
    },
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
