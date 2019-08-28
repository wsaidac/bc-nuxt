/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { storiesOf } from '@storybook/vue';
import store from '~~/.storybook/store';
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
      };
    },
    computed: {
      ...mapGetters('ui', ['overlayVisibility', 'overlayName']),
    },
    template: `
      <div>
        <ui-button @click.stop="showOverlay" type="primary">
          Open overlay!
        </ui-button>
        <overlay :title="title" :desc="desc" v-if="overlayVisibility === 'visible'">
          <p>Hello from inside the overlay!</p>
        </overlay>
        <portal-target
          transition="fade"
          :name="overlayName"
        />
      </div>

    `,
    components: { Overlay, UiButton },
    store,
    methods: {
      showOverlay() {
        this.$store.dispatch('ui/toggleOverlay', { name: 'Overlay', visibility: 'visible' });
      },
    },
  }));
