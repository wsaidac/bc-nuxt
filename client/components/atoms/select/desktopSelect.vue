<template>
  <div
    v-click-outside="onClickOutside"
    class="focus:outline-none bg-white relative rounded"
    role="listbox"
    @click="onClick"
  >
    <div :class="selectClasses">
      <p v-if="selected.label">{{ selected.label }}</p>
      <p
        v-else
        :class="textClasses"
      >
        {{ placeholder }}
      </p>
    </div>
    <icon
      icon="down"
      :class="['transition-all transition-200 absolute right-0 top-0 p-4 leading-normal', iconClasses]"
      :color="hasError ? 'error' : 'link'"
    />
    <transition name="fade">
      <ul
        v-if="showMenu"
        style="animation-duration: 0.2s"
        class="w-full absolute z-20 border border-b-0 border-gray max-w-xl -mt-px rounded-b bg-white"
      >
        <li
          v-for="option in options"
          :key="option.id"
          class="p-4 border-b leading-none border-gray hover:bg-gray-light cursor-pointer focus:outline-none"
          role="option"
          aria-labelledby="dropdown-label"
          tabindex="0"
          @click="onClickItem(option, $event)"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
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
    selectClasses: VueTypes.oneOfType([Array, String]).def(''),
    textClasses: VueTypes.string.def(''),
    iconClasses: VueTypes.string.def(''),
    initialSelected: VueTypes.shape({
      label: VueTypes.oneOfType([String, Number]).isRequired,
      value: VueTypes.oneOfType([String, Number]).isRequired,
      id: VueTypes.oneOfType([Number, String]).isRequired,
    }).loose,
  },
  data() {
    return {
      selected: this.initialSelected,
      showMenu: false,
    };
  },

  methods: {
    onClickItem(option, event) {
      event.stopPropagation();
      this.selected = option;
      this.showMenu = false;

      this.$emit('select', option);
    },
    onClick(event) {
      event.stopPropagation();
      this.$emit('toggle');

      this.showMenu = !this.showMenu;
    },
    onClickOutside() {
      this.showMenu = false;
      this.$emit('select:hide-options');
    },
  },
};
</script>
