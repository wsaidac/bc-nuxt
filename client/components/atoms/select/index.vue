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
        @toggle="toggle"
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
      return get(this, `this.options[${this.initialValue - 1}]`, {});
    },
  },
  methods: {
    onItemSelected(option) {
      this.toggle();

      this.$emit('select', option);
    },
    toggle() {
      this.toggleIcon();
      this.resetError();
    },
    toggleIcon() {
      const isEmptyOrNegative = this.iconClasses === '' || this.iconClasses === '-rotate-180';
      this.iconClasses = isEmptyOrNegative ? 'rotate-180' : '-rotate-180';
    },
    resetError() {
      this.error = false;
      this.selectClasses = this.setSelectedClasses();
      this.boxClasses = this.setBoxClasses();
      this.textClasses = this.setTextClasses();
    },
    setSelectedClasses(hasInitialError) {
      const base = 'input appearance-none cursor-pointer';
      const textDefault = 'text-primary placeholder:text-primary';
      const textError = 'text-error placeholder:text-error';

      const text = this.error || hasInitialError ? textError : textDefault;
      const bg = this.error || hasInitialError ? 'bg-error-light' : 'bg-transparent';

      return [base, text, bg];
    },
    setBoxClasses(hasInitialError) {
      const base = 'input-box label-floating mb-0';
      const borderError = 'border-error';
      const borderDefault = 'border-gray focus-within:border-secondary hover:border-gray-dark';
      const border = this.error || hasInitialError ? borderError : borderDefault;
      return [base, border];
    },
    setTextClasses(hasInitialError) {
      return this.error || hasInitialError ? 'text-error' : 'text-gray-black';
    },
  },
};
</script>
