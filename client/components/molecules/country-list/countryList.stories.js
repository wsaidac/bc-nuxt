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
      <div style="margin: 0 auto; max-width: 400px">
        <country-list :localeSelected="localeSelected" @country-list:click="changeLocale" />
      </div>
    `,
    methods: {
      changeLocale(code) {
        this.localeSelected = code;
        action('country-list:select')(code);
      },
    },

  }), info);
