import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import ProductCardCta from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('product-card-cta', ProductCardCta)


// stories
storiesOf('Molecules/Product Card CTA', module)
  .add('default', () => ({
    template: `
      <container>
        <row>
          <column class="w-1/3">
            <product-card-cta
              serviceFee="2.0 usd"
              value="15.0 usd"
            />
          </column>
        </row>
      </container>

    `,
    components: { ProductCardCta },
  }), info)
