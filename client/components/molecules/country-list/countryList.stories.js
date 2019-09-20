/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  action,
} from '@storybook/addon-actions';
import CountryList from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('country-list', CountryList);


// stories
storiesOf('Molecules/Country List', module)
  .add('default', () => ({
    components: {
      CountryList,
    },
    data: () => ({
      localeSelected: 'en-us',
    }),
    template: `
      <container class="py-6">
        <country-list localeSelected="en-us" @country-list:click="changeLocale" />
      </container>
    `,
    methods: {
      changeLocale(code) {
        this.localeSelected = code;
        action('country-list:select')(code);
      },
    },

  }), info);
