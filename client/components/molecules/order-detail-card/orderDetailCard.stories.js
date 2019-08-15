/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import OrderDetailCard from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('order-detail-card', OrderDetailCard);


const description = `
  <p class="p1"><b>What am I buying?</b>
  \nThese Sephora Gift Cards allow you to pay for products from Sephora, online and in offline shops.</p>
  <a href="#">Learn more about activating your code for Xbox One</a>
  <hr />
  <p class="p1"><b>What do I do here?</b>
  \nOn this page, you can choose the value of the Gift Card for Sephora.</p>
  <hr />
  \n<p class="p1"><b>After I buy\n
  </b>After you have selected the amount and placed an order, you will receive a code along with clear instructions (also by email) on how to use your Gift Card.</p>
  <hr />
  \n<p class="p1"><b>For who is it?
  \n</b>These Sephora Gift Cards are mostly used by people who want to give an online gift to someone else or themselves.
  People who want a different way of paying for their Sephora products. </p>
`;

// stories
storiesOf('Molecules/Order Detail Card', module)
  .add('default', () => ({
    components: {
      OrderDetailCard,
    },
    template: `
      <order-detail-card
        description='${description}'
      />
    `,

  }), info);
