<template>
  <ul v-if="list.length">
    <li
      v-for="country in list"
      :key="country.code"
      :class="[
        'flex px-6 py-4 border border-solid border-gray justify-between items-center mb-2 cursor-pointer hover:bg-gray-light',
        { 'bg-gray-light': country.selected }
      ]"
      @click="onClickLocale(country.code)"
    >
      <div class="flex">
        <flag
          :country="country.name"
          squared
        />
        <p class="text-gray-black capitalize pl-4">{{ country.displayName }}</p>
      </div>
      <ui-icon
        v-if="country.selected"
        icon="check"
        color="success"
      />
    </li>
  </ul>
</template>

<script>

import VueTypes from 'vue-types';
import { values, pick } from 'lodash';
import { Flag, UiIcon } from '~/components/atoms';
import locales from '~~/config/i18n/localesConfig';

export default {
  components: {
    Flag,
    UiIcon,
  },
  props: {
    localeSelected: VueTypes.string.def(''),
  },
  computed: {
    list() {
      return values(locales).map(locale => ({
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