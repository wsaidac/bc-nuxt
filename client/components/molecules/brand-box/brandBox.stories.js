/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import BrandBox from './index.vue';
import ProductCard from '~/components/molecules//product-card/';
import { info } from '~~/.storybook/utils';

// definition
Vue.component('banner-card', BrandBox);

storiesOf('Molecules/Brand Box', module)
  .add('default', () => ({
    components: {
      BrandBox,
      ProductCard,
    },
    data() {
      return {
        brand: {
          name: 'Verizon',
          logoSrc: 'https://via.placeholder.com/150',
          slug: '/verizon',
        },
        product: {
          id: 'test_id',
          title: 'Netflix Gift Card €15',
          value: '€15,00',
          serviceFee: '€1.99',
          buttonText: 'Bestellen',
          image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/F7322083-CCF7-47B1-8189-0DC5E4400E14.png',
          usps: 'Get <b>instant</b> delivery per email',
        },
      };
    },
    template: `
    <container>
        <row>
          <column class="w-1/3">
           <product-card
              :product="product"
            />
          </column>
          <column
            class="w-1/3"
          >
            <brand-box
              :brand="brand"
            />
          </column>
        </row>
      </container>
    `,

  }), info);
