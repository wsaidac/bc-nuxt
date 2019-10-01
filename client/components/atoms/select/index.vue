<template>
  <div class="relative w-full">
    <div :class="boxClasses">
      <mobile-select
        v-if="isMobile"
        :has-error="error"
        :icon-classes="iconClasses"
        :initial-selected="initialSelected"
        :options="options"
        :placeholder="placeholder"
        :select-classes="selectClasses"
        :text-classes="textClasses"
        @select="onItemSelected"
      />
      <desktop-select
        v-else
        :has-error="error"
        :icon-classes="iconClasses"
        :initial-selected="initialSelected"
        :options="options"
        :placeholder="placeholder"
        :select-classes="selectClasses"
        :text-classes="textClasses"
        @select="onItemSelected"
        @toggle="onToggleOptions"
        @select:hide-options="onClickHideOptions"
      />
    </div>
  </div>
</template>


<script>
import VueTypes from 'vue-types';
import { get } from 'lodash';

import MobileSelect from './mobileSelect';
import DesktopSelect from './desktopSelect';

export default {
  components: {
    MobileSelect,
    DesktopSelect,
  },
  props: {
    hasError: Boolean,
    placeholder: VueTypes.string.def(''),
    options: VueTypes.array.def([]),
    initialValue: VueTypes.number.def(-1),
    width: VueTypes.oneOfType([String, Number]),
  },
  data() {
    return {
      iconClasses: '',
      error: this.hasError,
      boxClasses: this.setBoxClasses(this.hasError),
      selectClasses: this.setSelectedClasses(this.hasError),
      textClasses: this.setTextClasses(this.hasError),
    };
  },
  computed: {
    isMobile() {
      return this.$mq === 'sm';
    },
    initialSelected() {
      return get(this, `options[${this.initialValue - 1}]`, {});
    },
  },
  methods: {
    onItemSelected(selected, options = {}) {
      if (!options.fromMobile) this.toggle();

      this.$emit('select', selected);
    },
    toggle() {
      this.onToggleOptions();
      this.resetError();
    },
    onToggleOptions() {
      const isEmptyOrNegative = this.iconClasses === '' || this.iconClasses === '-rotate-180';
      this.iconClasses = isEmptyOrNegative ? 'rotate-180' : '-rotate-180';
    },
    onClickHideOptions() {
      this.iconClasses = '-rotate-180';
    },
    resetError() {
      this.error = false;
      this.selectClasses = this.setSelectedClasses();
      this.boxClasses = this.setBoxClasses();
      this.textClasses = this.setTextClasses();
    },
    setSelectedClasses(hasInitialError) {
      const base = 'select appearance-none cursor-pointer';
      const textDefault = 'text-primary placeholder:text-primary';
      const textError = 'text-error placeholder:text-error';

      const text = this.error || hasInitialError ? textError : textDefault;
      const bg = this.error || hasInitialError ? 'bg-error-light' : 'bg-transparent';

      return [base, text, bg];
    },
    setBoxClasses(hasInitialError) {
      const base = 'select-box label-floating mb-0';
      const borderError = 'border-error';
      const width = `w-${this.width ? this.width : 'full'}`;
      const borderDefault = 'border-gray focus-within:border-secondary hover:border-gray-dark';
      const border = this.error || hasInitialError ? borderError : borderDefault;
      return [base, border, width];
    },
    setTextClasses(hasInitialError) {
      return this.error || hasInitialError ? 'text-error' : 'text-gray-black';
    },
  },
};
</script>

<style>
.select {
  @apply w-full p-4 leading-none rounded text-lg overflow-hidden;

  &-box {
    @apply relative border max-w-xl rounded appearance-none;
  }

  &-label {
    @apply absolute text-lg p-4 top-0 left-0 cursor-text;
  }
}
</style>
