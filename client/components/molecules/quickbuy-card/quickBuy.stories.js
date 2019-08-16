/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  action,
} from '@storybook/addon-actions';
import QuickBuyCard from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('quickbuy-card', QuickBuyCard);


// stories
storiesOf('Molecules/QuickBuy Card', module)
  .add('default', () => ({
    components: {
      QuickBuyCard,
    },
    data() {
      return {
        image: {
          regular: 'http://media.contentapi.ea.com/content/www-easports/en_US/fifa/ultimate-team/news/2017/fut-online-match-modes/_jcr_content/imageShare.img.jpg',
          alt: 'Fifa 2019',
        },
        brand: {
          regular: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/3404DAE0-2E76-4D77-90D0-40E88D782648.svg',
        },
      };
    },
    template: `
    <container>
      <row wrap>
        <column class="w-full md:w-1/2 lg:w-1/3 ">
          <quickbuy-card
            title="Fifa 19 points"
            buttonText="Bestel snel"
            :image="image"
            :brand="brand"
          />
        </column>
        <column class="w-full md:w-1/2 lg:w-1/3 ">
          <quickbuy-card
            title="Fifa 19 points"
            buttonText="Bestel snel"
            :image="image"
            :brand="brand"
          />
        </column>
        <column class="w-full md:w-1/2 lg:w-1/3 ">
          <quickbuy-card
            title="Fifa 19 points"
            buttonText="Bestel snel"
            :image="image"
            :brand="brand"
          />
        </column>
      </row>
      <row>
        <column class="w-full">
          <quickbuy-card
            title="Fifa 19 points"
            buttonText="Bestel snel"
            :image="image"
            :brand="brand"
          />
        </column>
      </row>
    </container>
    `,
    methods: {
      action: action('on button click'),
    },

  }), info);
