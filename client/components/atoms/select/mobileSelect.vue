<template>
  <div>
    <select
      :class="selectClasses"
      @change="onChange($event)"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <icon
      icon="down"
      :class="['transition-all transition-200 absolute right-0 top-0 p-4', iconClasses]"
      :color="hasError ? 'error' : 'link'"
    />
  </div>
</template>


<script>
import VueTypes from 'vue-types';

import Icon from '~/components/atoms/icon';

export default {
  components: {
    Icon,
  },
  props: {
    hasError: Boolean,
    hideSufix: Boolean,
    placeholder: VueTypes.string.def(''),
    options: VueTypes.array.def([]),
    selectClasses: VueTypes.oneOfType([String, Array]).def(''),
    iconClasses: VueTypes.string.def(''),
    initialSelected: VueTypes.shape({
      label: VueTypes.oneOfType([String, Number]).isRequired,
      value: VueTypes.oneOfType([String, Number]).isRequired,
      id: VueTypes.oneOfType([Number, String]).isRequired,
    }),
  },
  data() {
    return {
      selected: this.initialSelected,
    };
  },
  methods: {
    onChange(event) {
      const { value } = event.target;
      const selectedOption = this.options.find((option) => option.value === Number(value));

      this.$emit('select', selectedOption, { fromMobile: true });
    },
  },
};
</script>
