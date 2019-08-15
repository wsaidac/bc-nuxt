<template>
  <ul v-if="list.length">
    <li
      v-for="country in list"
      :key="country.code"
      :aria-labelledby="`country-list-text-${country.name}`"
      tabindex="0"
      :data-test="`country-list-text-${country.name}`"
      role="button"
      :class="[
        'flex px-6 py-4 border border-solid border-gray justify-between items-center mb-2 cursor-pointer hover:bg-gray-light focus:outline-none',
        { 'bg-gray-light': country.selected }
      ]"
      @click="onClickLocale(country.code)"
    >
      <div class="flex">
        <flag
          :country="country.name"
          squared
        />
        <p
          :id="`country-list-text-${country.name}`"
          class="text-gray-black capitalize pl-4"
        >
          {{ country.displayName }}
        </p>
      </div>
      <icon
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
import { Flag, Icon } from '~/components/atoms';
import locales from '~~/config/i18n/localesConfig';

export default {
  components: {
    Flag,
    Icon,
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
