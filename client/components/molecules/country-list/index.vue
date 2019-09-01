<template>
  <ul
    v-if="list.length"
    class="flex flex-wrap justify-around"
  >
    <li
      v-for="country in list"
      :key="country.code"
      :aria-labelledby="`country-list-text-${country.name}`"
      tabindex="0"
      :data-test="`country-list-text-${country.name}`"
      role="button"
      class="w-1/2 mb-3 odd:pr-4"
      @click="onClickLocale(country.code)"
    >
      <div
        :class="[
          listItemClasses,
          { 'bg-gray-light': country.selected }
        ]"
      >
        <flag
          :country="country.name"
          squared
          class="flex-grow-0"
        />
        <p
          :id="`country-list-text-${country.name}`"
          class="text-gray-black capitalize pl-4 flex-grow"
        >
          {{ country.displayName }}
        </p>
        <icon
          v-if="country.selected"
          icon="check"
          color="success"
          class="flex-grow-0"
        />
      </div>
    </li>
  </ul>
</template>

<script>

import VueTypes from 'vue-types';
import { pick } from 'lodash';
import { Flag, Icon } from '~/components/atoms';

export default {
  components: {
    Flag,
    Icon,
  },
  props: {
    localeSelected: VueTypes.string.def(''),
  },
  data() {
    return {
      listItemClasses: 'flex px-6 py-3 border border-solid border-gray justify-between items-center cursor-pointer hover:bg-gray-light focus:outline-none',
    };
  },
  computed: {
    list() {
      return this.$i18n.locales
        .filter(locale => locale.selectable)
        .map(locale => ({
          ...pick(locale, ['code', 'name', 'displayName']),
          selected: locale.code === this.localeSelected,
        }));
    },
  },
  methods: {
    onClickLocale(code) {
      this.$emit('country-list:click', code);
    },
  },

};
</script>
