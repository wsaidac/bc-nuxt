/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Overlay from './index.vue';
import { UiButton } from '~/components/atoms/';


// definition
Vue.component('overlay', Overlay);
Vue.component('ui-button', UiButton);

// stories
storiesOf('Organisms/Overlay', module)
  .add('default', () => ({
    data() {
      return {
        title: 'Overlay',
        desc: 'This is an overlay component',
        state: 'active',
        showOverlay: false,
      };
    },
    template: `
      <div>
        <ui-button @click="showOverlay = true" type="primary">
          Open overlay!
        </ui-button>
        <overlay :title="title" :desc="desc" v-if="showOverlay">
          <p>Hello from inside the overlay!</p>
        </overlay>
        <portal-target
          transition="fade"
          name="overlay"
        />
      </div>

    `,
    components: { Overlay },
  }));
