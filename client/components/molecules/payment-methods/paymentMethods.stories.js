/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import PaymentMethods from './index.vue';


// definition
Vue.component('payment-methods', PaymentMethods);

// stories
storiesOf('Molecules/Payment Methods', module)
  .add('default', () => ({
    data() {
      return {
        paymentMethods: [
          {
            name: 'Visa',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/E1DFEF2D-D719-4A96-A7BC-CBB007FFC17A.svg',
          },
          {
            name: 'PayPal',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/36DBBF0F-884C-494D-B84B-00C2B2D3B277.svg',
          },
          {
            name: 'IDeal',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/E7451771-2539-41A6-B3AB-2D162B68039B.svg',
          },
          {
            name: 'Master Card',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/F611E13F-D4BC-43AD-8822-5F836C7133C2.svg',
          },
          {
            name: 'American Express',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/010DF931-82D8-422E-8E4B-BCB09AE1C1C3.svg',
          },
        ],
      };
    },
    template: `<payment-methods :list="paymentMethods" link="/payment-methods"/>`,
    components: { PaymentMethods },
  }));
