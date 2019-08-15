<template>
  <div>
    <select
      :class="selectClasses"
      @change="onChange"
    >
      <option
        disabled
        selected
        hidden
      >
        {{ placeholder }}
      </option>
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
    selectClasses: VueTypes.string.def(''),
    iconClasses: VueTypes.string.def(''),
    initialSelected: VueTypes.shape({
      label: VueTypes.string.isRequired,
      value: VueTypes.string.isRequired,
      id: VueTypes.oneOfType([Number, String]).isRequired,
    }),
  },
  data() {
    return {
      selected: this.initialSelected,
    };
  },
  methods: {
    onChange(option) {
      // event.stopPropagation();
      this.selected = option;

      this.$emit('select', option);
    },
  },
};
</script>
