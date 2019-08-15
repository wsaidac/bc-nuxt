/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  action,
} from '@storybook/addon-actions';
import BannerImage from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('banner-image', BannerImage);


// stories
storiesOf('Molecules/Banner Image', module)
  .add('default', () => ({
    components: {
      BannerImage,
    },
    data() {
      return {
        image: {
          regular: 'http://media.contentapi.ea.com/content/www-easports/en_US/fifa/ultimate-team/news/2017/fut-online-match-modes/_jcr_content/imageShare.img.jpg',
          alt: 'Fifa 2019',
        },
        brand: {
          src: 'https://cdn.zeplin.io/5d23163f91be672e1f32200e/assets/3404DAE0-2E76-4D77-90D0-40E88D782648.svg',
          alt: 'Xbox',
        },
      };
    },
    template: `
    <container>
      <row>
        <column class="w-1/2">
          <banner-image
            alt="Fifa 19 points"
            :src="image"
            :brand="brand"
            gradient
          />
        </column>
      </row>
    </container>
    `,
    methods: {
      action: action('on button click'),
    },

  }), info);
