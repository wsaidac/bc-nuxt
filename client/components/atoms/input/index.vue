<template>
  <div :class="boxClasses">
    <input
      :id="id"
      ref="input"
      :value="value"
      v-bind="$attrs"
      :v-on="$listeners"
      :class="inputClasses"
      :placeholder="label"
      :disabled="isLoading"
      type="text"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @input="$emit('input', $event.target.value)"
    >
    <label
      :class="labelClasses"
      for="id"
      @click="onClickLabel"
    >
      {{ label }}
    </label>
    <icon
      v-if="showSufix"
      :icon="sufixIcon"
      class="absolute right-0 top-0 p-4 leading-normal"
      :color="sufixColor"
      font-size="lg"
    />
  </div>
</template>

<script>
import { uniqueId } from 'lodash';
import VueTypes from 'vue-types';

import Icon from '~/components/atoms/icon';

export default {
  components: {
    Icon,
  },
  inheritAttrs: false,
  props: {
    isSucceeded: Boolean,
    hasError: Boolean,
    hideSufix: Boolean,
    isDirty: Boolean,
    isFocused: Boolean,
    isLoading: Boolean,
    label: VueTypes.string.def(''),
    value: VueTypes.oneOfType([String, Number]).def(''),
    uppercase: Boolean,
  },
  data() {
    return {
      id: uniqueId(),
    };
  },
  computed: {
    showError() {
      return !this.isFocused && this.hasError;
    },
    labelClasses() {
      const base = 'input-label';
      const text = this.showError ? 'text-error' : 'text-primary';

      return [base, text];
    },
    boxClasses() {
      const base = 'input-box label-floating';
      let border = 'border-gray focus-within:border-secondary hover:border-gray-dark';

      if (this.showError) border = 'border-error';
      else if (this.isLoading) border = 'opacity-50 border-gray';

      return [base, border];
    },
    inputClasses() {
      const base = 'input';
      const text = this.showError ? 'text-error placeholder:text-error' : 'text-primary placeholder:text-primary';
      const bg = this.showError ? 'bg-error-light' : '';

      return [base, text, bg, { uppercase: this.uppercase }];
    },
    showSufix() {
      if (this.hideSufix) return false;
      if (this.showError || this.isSucceeded || this.isLoading) return true;

      return this.isDirty && !this.hasError;
    },
    sufixColor() {
      return this.showError ? 'error' : 'success';
    },
    sufixIcon() {
      if (this.isLoading) return 'loader';
      if (this.showError) return 'close';

      return 'check';
    },
  },
  methods: {
    onClickLabel() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style scoped>
.input {
  @apply w-full p-4 leading-normal rounded text-lg;

  &-box {
    @apply relative border max-w-xl w-full rounded mb-4 appearance-none;
  }

  &-label {
    @apply text-gray-black absolute text-lg p-4 top-0 left-0 leading-normal cursor-text;
  }
}

.label-floating input:not(:placeholder-shown) {
  @apply px-4 pt-6 pb-2;

  ~ label {
    @apply text-xxs pt-2;

    transition: all 0.2s ease-in-out;

    &:not(.text-error) {
      @apply text-gray-black;
    }
  }
}

.label-floating input::placeholder {
  color: transparent;
}
</style>
