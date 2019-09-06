<template>
  <ul
    v-if="list.length"
    class="country-list"
  >
    <li
      v-for="country in list"
      :key="country.code"
      :aria-labelledby="`country-list-text-${country.name}`"
      tabindex="0"
      :data-test="`country-list-text-${country.name}`"
      role="button"
      class="country-list__item"
      @click="onClickLocale(country.code)"
    >
      <div
        class="box"
        :class="[{ 'bg-gray-light': country.selected }]"
      >
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
  computed: {
    list() {
      const localesList = this.$i18n.locales
        .filter(locale => locale.selectable)
        .filter(locale => locale.code !== this.restrictedCountry)
        .map(locale => ({
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

<style lang="scss" scoped>
$color-gray: #e8e8e8;
$color-gray-light: #f3f3f3;
$color-gray-black: #838383;

.country-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 -4px;
  padding: 0;

  &__item {
    font-size: 1rem;
    padding: 0 0.5rem 1rem 0.5rem;
    width: 50%;

    .box {
      align-items: center;
      background: white;
      border: 1px solid $color-gray;
      cursor: pointer;
      display: flex;
      padding: 0.75rem 1.5rem;

      &:hover {
        background: $color-gray-light;
      }

      &:focus {
        outline: 0;
      }

      .flag {
        flex-grow: 0;
      }

      p {
        color: $color-gray-black;
        flex-grow: 1;
        overflow: hidden;
        padding-left: 1rem;
        text-overflow: ellipsis;
        text-transform: capitalize;
        white-space: nowrap;
      }
    }

    @include media-breakpoint-up("md") {
      font-size: 1.125rem;
      width: 33%;
    }
  }
}

li:focus,
button:focus {
  outline: 0;
}

.bg-gray-light {
  background: $color-gray-light;
}
</style>
