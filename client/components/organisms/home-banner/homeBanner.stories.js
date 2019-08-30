import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import HomeBanner from './index.vue';
import { info } from '~~/.storybook/utils'

import homePostMock from '~~/.storybook/mocks/home-post.prop.json';
// definition
Vue.component('home-banner', HomeBanner)

const header = homePostMock.header;

// stories
storiesOf('Organisms/Home Banner', module)
  .add('default', () => ({
    data() {
      return {
        header: {
          ...header,
          buttonText: '????', // missing-field
          description: 'Geef games, apps en abonnementen cadeau met de Google Play gift code.' // missing-field
        },
      }
    },
    template: `<home-banner :header="header" />`,
    components: { HomeBanner },
  }), info)
