/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  action,
} from '@storybook/addon-actions';
import ProductCard from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('product-card', ProductCard);

const content = '<ul><li>500 MB data 4G</li><li>500 MB data 4G</li> <li>500 MB data 4G</li></ul>';

const product = {
  id: 'test_id',
  title: 'Netflix Gift Card €15',
  value: '€15,00',
  serviceFee: '€1.99',
  buttonText: 'Bestellen',
  image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/F7322083-CCF7-47B1-8189-0DC5E4400E14.png',
  usps: 'Get <b>instant</b> delivery per email',
};

// stories
storiesOf('Molecules/Product Card', module)
  .add('default', () => ({
    components: {
      ProductCard,
    },
    data() {
      return {
        product,
        product2: {
          ...product,
          isPopular: true,
          content,
        },
      };
    },
    template: `
      <container>
        <row wrap>
          <column
            v-for="n in 6"
            :key="n"
            class="w-full md:w-1/2 lg:w-1/3"
          >
            <product-card
              :product="n % 2 === 0  ? product : product2"
              :id="n"
              @product-card:click="action"
            />
          </column>
        </row>

      </container>
    `,
    methods: {
      action: action('product-card:click'),
    },

  }), info);
