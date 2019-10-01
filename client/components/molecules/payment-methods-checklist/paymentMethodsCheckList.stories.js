/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import PaymentMethodsChecklist from './index.vue';


// definition
Vue.component('payment-methods-checklist', PaymentMethodsChecklist);

// stories
storiesOf('Molecules/Payment Methods CheckList', module)
  .add('default', () => ({
    data() {
      return {
        paymentMethods: [
          {
            id: 1,
            name: 'Visa',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/E1DFEF2D-D719-4A96-A7BC-CBB007FFC17A.svg',
            serviceFee: 'Free',
          },
          {
            id: 2,
            name: 'PayPal',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/36DBBF0F-884C-494D-B84B-00C2B2D3B277.svg',
            serviceFee: 'Free',
          },
          {
            id: 3,
            name: 'IDeal',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/E7451771-2539-41A6-B3AB-2D162B68039B.svg',
            serviceFee: 'Free',
          },
          {
            id: 4,
            name: 'Master Card',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/F611E13F-D4BC-43AD-8822-5F836C7133C2.svg',
            serviceFee: 'Free',
          },
          {
            id: 5,
            name: 'American Express',
            image: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/010DF931-82D8-422E-8E4B-BCB09AE1C1C3.svg',
            serviceFee: 'Free',
          },
        ],
      };
    },
    template: `
      <container class="py-6">
        <row>
          <column class="w-1/2">
            <payment-methods-checklist :payment-methods="paymentMethods"/>
          </column>
        </row>
      </container>
      `,
    components: { PaymentMethodsChecklist },
  }));
