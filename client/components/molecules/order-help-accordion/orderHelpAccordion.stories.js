
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import OrderHelpAccordion from './index.vue';
import OrderHelpItem from './item.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('order-help-accordion', OrderHelpAccordion);

// stories
storiesOf('Molecules/Order Help Accordion', module)
  .add('default', () => ({
    data() {
      return {
        questions: [
          {
            question: 'What can I use my Sephora gift card for?',
            answer: 'You can use your Sephora eGift Card to purchase beauty products at Sephora.com, in the Sephora Mobile App, at U.S. &amp; Canada Sephora Stores and Sephora inside JCPenny Stores. Use your gift card in store as well as online. Please note that you can\'t use your gift card to buy other gift cards.',
          },
          {
            question: 'What kind of account do I need to redeem my Sephora gift card?',
            answer: 'You do not need any kind of account to redeem your Sephora eGift Card.',
          },
          {
            question: 'How can I redeem my Sephora gift code?',
            answer: 'To redeem your Sephora eGift Card, please click on the \'Claim\' site link and enter the Secret Code into their website. After completing the redemption process, you will be presented with a printable Sephora gift card valid for use in store or at their website at www.sephora.com.\r\n\r\n<strong><span class="bb-bold">Use online:</span></strong>\r\n1. At the checkout page, enter your Sephora Gift Card number and PIN in the Payment section\r\n2. Click <strong><span class="bb-bold">Save &amp; Continue</span></strong> in the lower right-hand corner of the Payment area\r\n3. The gift card amount will be deducted from your total order\r\n\r\n<strong><span class="bb-bold">Use in-store:</span></strong>\r\nShow your gift card to the cashier at any Sephora store in the U.S. and Canada.',
          },
        ],
      };
    },
    template: `
    <container class="py-8">
      <order-help-accordion :questions="questions" />
    </container>
    `,
  }), info);

Vue.component('order-help-item', OrderHelpItem);

storiesOf('Molecules/Order Help Item', module)
  .add('default', () => ({
    data() {
      return {
        question: 'What can I use my Sephora gift card for?',
        answer: 'You can use your Sephora eGift Card to purchase beauty products at Sephora.com, in the Sephora Mobile App, at U.S. &amp; Canada Sephora Stores and Sephora inside JCPenny Stores. Use your gift card in store as well as online. Please note that you can\'t use your gift card to buy other gift cards.',
      };
    },
    template: `
      <container class="py-6">
        <order-help-item :question="question" :answer="answer" />
      </container>
    `,
  }));
