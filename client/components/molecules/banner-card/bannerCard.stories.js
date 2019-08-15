/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  action,
} from '@storybook/addon-actions';
import BannerCard from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('banner-card', BannerCard);


const desc = 'Geef games, apps en abonnementen cadeau met de Google Play gift code.';
const title = 'Much more play, all on your Phone';
// stories
storiesOf('Molecules/Banner Card', module)
  .add('default', () => ({
    components: {
      BannerCard,
    },
    template: `
      <banner-card
        title="${title}"
        description="${desc}"
        buttonText="${'Go now'}"
        @banner-card:click="action"
      />
    `,
    methods: {
      action: action('on button click'),
    },

  }), info);
