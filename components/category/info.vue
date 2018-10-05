<template>
  <div class="category-info container">
    <ui-row>
      <ui-col :sm="12">
        <ul class="list-unstyled">
          <li @click="toggle('usp')">
            <div
              class="category-info__faq-title"
              v-text="'Benefits of Rapido.com'"
            />
            <ui-transition-expand>
              <header-usps
                v-if="isExpanded('usp')"
                :usps="usps"
                vertical
              />
            </ui-transition-expand>
          </li>
          <li
            v-for="(question, i) in info.productQuestions"
            :key="i"
            @click="toggle(i)"
          >
            <div
              class="category-info__faq-title"
              v-text="question.title"
            />
            <ui-transition-expand>
              <div
                v-if="isExpanded(i)"
                class="category-info__faq-content"
                v-text="question.content"
              />
            </ui-transition-expand>
          </li>
        </ul>
      </ui-col>
      <ui-col :sm="12">
        asdf
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
import {
  UiRow,
  UiCol,
  UiTransitionExpand,
} from '~/components/ui';

import HeaderUsps from '~/components/header/usps';

export default {
  components: {
    UiRow,
    UiCol,
    UiTransitionExpand,
    HeaderUsps,
  },

  props: {
    info: {
      type: Object,
      required: true,
    },
    usps: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      expanded: [],
    };
  },

  methods: {
    toggle(i) {
      const index = this.expanded.indexOf(i);
      return index >= 0 ? this.expanded.splice(index, 1) : this.expanded.push(i);
    },

    isExpanded(i) {
      return this.expanded.includes(i);
    },
  },
};
</script>

<style lang="scss">
.category-info {
  font-size: 10px;

  &__faq-title {
    border-top: 1px solid $gray-400;
    font-size: 1.68em;
    font-weight: $font-weight-bold;
    padding: 10px 20px;

    &:hover {
      background: $gray-100;
    }
  }

  &__faq-content {
    border-top: 1px solid $gray-400;
    padding: 10px 20px;
  }

  @include media-breakpoint-down('md') {
    font-size: 8.57px;
  }

  @include media-breakpoint-down('xs') {
    font-size: 9.42px;
  }
}
</style>
