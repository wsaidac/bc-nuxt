<template>
  <ul
    v-if="list.length"
    class="flex flex-wrap -mx-1"
  >
    <li
      v-for="country in list"
      :key="country.code"
      :aria-labelledby="`country-list-text-${country.name}`"
      tabindex="0"
      :data-test="`country-list-text-${country.name}`"
      role="button"
      class="country-list__item"
      :class="['pb-4 px-2', columnClasses]"
      @click="onClickLocale(country.code)"
    >
      <div :class="[listItemClasses, { 'bg-gray-light': country.selected }]">
        <flag
          :country="country.name"
          squared
          class="flex-grow-0"
        />
        <p
          :id="`country-list-text-${country.name}`"
          class="text-gray-black capitalize pl-4 flex-grow whitespace-no-wrap truncate"
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
import { pick, orderBy } from 'lodash';
import { Flag, Icon } from '~/components/atoms';

const COLUMN_SIZE = {
  sm: 'full',
  md: 'full',
  lg: '1/2',
};

export default {
  components: {
    Flag,
    Icon,
  },
  props: {
    localeSelected: VueTypes.string.def(''),
    columnSizes: VueTypes.shape({
      sm: VueTypes.string.isRequired,
      md: VueTypes.string.isRequired,
      lg: VueTypes.string.isRequired,
    }).def(COLUMN_SIZE),
    restrictedCountry: VueTypes.string.def(null),
  },
  data() {
    return {
      listItemClasses: 'flex px-6 py-3 border border-solid border-gray justify-between items-center cursor-pointer hover:bg-gray-light focus:outline-none',
    };
  },
  computed: {
    list() {
      const localesList = this.$i18n.locales
        .filter((locale) => locale.selectable)
        .filter((locale) => locale.code !== this.restrictedCountry)
        .map((locale) => ({
          ...pick(locale, ['code', 'name', 'displayName']),
          selected: locale.code === this.localeSelected,
        }));

      return orderBy(localesList, ['selected', 'displayName'], ['desc', 'asc']);
    },
    columnClasses() {
      const { columnSizes } = this;
      return `w-${columnSizes.sm} md:w-${columnSizes.md} lg:w-${columnSizes.lg}`;
    },
  },
  methods: {
    onClickLocale(code) {
      this.$emit('country-list:click', code);
    },
  },

};
</script>
