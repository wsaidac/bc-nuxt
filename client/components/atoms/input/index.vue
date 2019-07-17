<template>
  <div :class="boxClasses">
    <input
      :id="id"
      :value="value"
      v-bind="$attrs"
      :v-on="$listeners"
      :class="inputClasses"
      type="text"
      :placeholder="label"
      @change="onChange"
    >
    <label
      :class="labelClasses"
      for="id"
    >
      {{ label }}
    </label>
    <ui-icon
      v-if="showSufix"
      :icon="sufixIcon"
      class="absolute right-0 top-0 p-4"
      :color="sufixColor"
      font-size="lg"
    />
  </div>
</template>

<script>
import { uniqueId } from 'lodash';
import VueTypes from 'vue-types';

import UiIcon from '~/components/atoms/icon';

export default {
  components: {
    UiIcon,
  },
  inheritAttrs: false,
  props: {
    hasError: Boolean,
    hideSufix: Boolean,
    isDirty: Boolean,
    isLoading: Boolean,
    label: VueTypes.string.def(''),
    value: VueTypes.oneOfType([String, Number]).def(''),
  },
  data() {
    return {
      id: uniqueId(),
    };
  },
  computed: {
    labelClasses() {
      const base = 'input-label';
      const text = this.hasError ? 'text-error' : 'text-primary';

      return [base, text];
    },
    boxClasses() {
      const base = 'input-box label-floating';
      const border = this.hasError ? 'border-error' : 'border-gray focus-within:border-secondary hover:border-gray-dark';

      return [base, border];
    },
    inputClasses() {
      const base = 'input';
      const text = this.hasError ? 'text-error placeholder:text-error' : 'text-primary placeholder:text-primary';
      const bg = this.hasError ? 'bg-error-light' : '';

      return [base, text, bg];
    },
    showSufix() {
      // @tTODO: figure it out how to do it better
      if (this.hideSufix) return false;
      if (this.hasError) return true;

      return this.isDirty || this.value.length;
    },
    sufixColor() {
      return this.hasError ? 'error' : 'success';
    },
    sufixIcon() {
      if (this.hasError) {
        return 'close';
      }

      return 'check';
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style>
.input {
  @apply w-full p-4 leading-normal rounded text-lg ;

  &-box {
    @apply relative border max-w-xl w-full rounded mb-4 appearance-none;
  }

  &-label {
    @apply absolute text-lg p-4 top-0 left-0 leading-normal;
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
