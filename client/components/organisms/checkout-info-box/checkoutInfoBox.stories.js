import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import CheckoutInfoBox from './index.vue';
import CheckoutProductField from './product-field';
import CheckoutDiscountCodeField from './discount-code-field';
import { info } from '~~/.storybook/utils'
import mock from '~~/.storybook/mocks/homepage.state.json'

import {
  action
} from '@storybook/addon-actions';


import store from '~~/.storybook/store';

store.commit('shared/setUsps', mock.shared.usps);

// definition
Vue.component('checkout-info-box', CheckoutInfoBox)
Vue.component('checkout-product-field', CheckoutProductField)
Vue.component('checkout-discount-code-field', CheckoutDiscountCodeField)


const product = {
  id: 123,
  value: '€5,00',
  serviceFee: '€1,00',
  image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/AA30DFF1-CBE3-4D1E-8822-B4804E329FC0.svg',
  title: 'Online 50mb'
}

let defaultAmounts = [
  { id: 0, label: 1, value: 1 },
  { id: 1, label: 2, value: 2 },
  { id: 2, label: 3, value: 3 },
  { id: 3, label: 4, value: 4 },
  { id: 4, label: 5, value: 5 },
  { id: 5, label: 10, value: 10 },
];



// stories
storiesOf('Organisms/Checkout Info Box', module)
  .add('default', () => ({
    data() {
      return {
        product: product,
        amounts: defaultAmounts,
        restrictions: [{ country: 'us', message: 'This product can only be used in the United States' }]
      }
    },
    template: `
      <container class="py-6">
        <row>
          <column class="w-full lg:w-5/12">
            <checkout-info-box
              :product="product"
              :amounts="amounts"
              total="€5,00"
              subtotal="€5,00"
              :restrictions="restrictions"
            />
          </column>
        </row>
      </container>
    `,
    store,
    components: { CheckoutInfoBox },
  }), info)

storiesOf('Molecules/Checkout Product Field', module)
  .add('default', () => ({
    data() {
      return {
        product: product,
        amounts: defaultAmounts,
      }
    },
    template: `
      <container class="py-6">
        <row>
          <column class="w-full lg:w-5/12">
            <card>
              <checkout-product-field
                :product="product"
                :amounts="amounts"
                @checkout-product:select="action"
              />
            </card>
          </column>
        </row>
      </container>
    `,
    components: { CheckoutProductField },
    methods: {
      action: action('checkout-product:select'),
    }
  }))

storiesOf('Molecules/Checkout Discount Code Field', module)
  .add('default', () => ({
    template: `
      <container class="py-6">
        <row>
          <column class="w-full lg:w-5/12">
            <card>
              <checkout-discount-code-field />
            </card>
          </column>
        </row>
      </container>
    `,
    components: { CheckoutDiscountCodeField }
  }))
