/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  action,
} from '@storybook/addon-actions';
import CategoryCard from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('category-card', CategoryCard);

// stories
storiesOf('Molecules/Catgory Card', CategoryCard)
  .add('default', () => ({
    components: {
      CategoryCard,
    },
    data() {
      return {
        image: {
          regular: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/AA30DFF1-CBE3-4D1E-8822-B4804E329FC0.svg',
          alt: 'Netflix',
        },
      };
    },
    template: `
      <container>
        <row>
          <column
            v-for="n in 6"
            :key="n"
            class="w-1/6"
          >
            <category-card
              :image="image"
              title='Netflix'
              linkTo='#'
              linkTitle='Netfix'
            />
          </column>
        </row>
      </container>
    `,
    methods: {
      action: action('on button click'),
    },

  }), info);
