/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Overlay from './index.vue';


// definition
Vue.component('overlay', Overlay);

// stories
storiesOf('Molecules/Overlay', module)
  .add('default', () => ({
    data() {
      return {
        title: 'Overlay',
        desc: 'This is an overlay component',
        state: 'active',
      };
    },
    template: `<overlay :title="title" :desc="desc" :state="state" />`,
    components: { Overlay },
  }));
