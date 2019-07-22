import Vue from 'vue';
/* eslint-disable */
import {
  storiesOf
} from '@storybook/vue';
import Image from './index.vue';
import {
  info
} from '~~/.storybook/utils'
import VueMq from 'vue-mq';
import {
  breakpoints
} from '~/constants';


// definition
Vue.component('ui-image', Image)

Vue.use(VueMq, {
  breakpoints: {
    sm: breakpoints.SM,
    md: breakpoints.MD,
    lg: breakpoints.LG,
  },
  // default for SSR
  defaultBreakpoint: 'sm',
});


// stories
storiesOf('Atoms/Image', module)
  .add('default', () => ({
    template: `
      <div style="position: relative; display: flex; width: 1000px; border: 3px solid #333;">
        <ui-image
          src="https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png"
          alt="alt text"
          class="h-auto w-full"
        />
      </div>`,
    components: {
      Image
    },
  }), info)
  .add('responsive', () => ({
    components: {
      Image
    },
    render: h => {
      return <Image src={
        {
          regular: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/global-assets/common/featuredimage.png.adapt.crop191x100.1200w.png',
          retina: 'https://www.esports.com/upload/articles/4327/fifa20_bg.jpg',
          tablet: 'https://i2.offnews.bg/events/2019/06/08/704973/phpa62tyq_800x*.jpg',
        }
      }
      />
    }
  }), info)

    //https://www.esports.com/upload/articles/4327/fifa20_bg.jpg
