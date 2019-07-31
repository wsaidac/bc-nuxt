/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Copyright from './index.vue';

import fakeI18nPlugin from '~~/.storybook/fakeI18nPlugin';

// definition
Vue.component('copyright', Copyright);

Vue.use(fakeI18nPlugin, {
  translations: {
    footer: {
      quote: 'Part of',
    },
  },
});

// stories
storiesOf('Molecules/Copy Right', module)
  .add('default', () => ({
    template: `<copyright/>`,
    components: { Copyright },
  }));
