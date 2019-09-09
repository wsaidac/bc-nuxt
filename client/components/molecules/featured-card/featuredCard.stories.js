/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  action,
} from '@storybook/addon-actions';
import FeaturedCard from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('featured-card', FeaturedCard);


const product = {
  title: 'Want to have Lionel Messi in your FIFA ultimate team?',
  description: 'Invest 825.000 FIFA points and let him play for your Ultimate Team!',
  image: 'https://www.foxsportsasia.com/tachyon/2018/10/Messi-1.jpg',
  buttonText: 'Koop 825.000 points',
};

// stories
storiesOf('Molecules/Featured Card', module)
  .add('default', () => ({
    components: {
      FeaturedCard,
    },
    data() {
      return {
        product,
      };
    },
    template: `
      <container class="py-6">
        <featured-card
          :product="product"
          @featured-card:click="action"
        />
      </container>
    `,
    methods: {
      action: action('featured-card:click'),
    },

  }), info);
