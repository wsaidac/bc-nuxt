/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { storiesOf } from '@storybook/vue';
import store from '~~/.storybook/store';
import CountrySelect from './index.vue';
import { UiButton } from '~/components/atoms/';
import { portals } from '~/constants/';

// definition
Vue.component('country-select', CountrySelect);
Vue.component('ui-button', UiButton);

// stories
storiesOf('Organisms/Country Select', module)
  .add('default', () => ({
    data() {
      return {
        portalName: portals.PORTAL_NAME_COUNTRY_SELECT,
      };
    },
    computed: {
      ...mapGetters('ui', ['overlayVisibility', 'overlayName']),
    },
    template: `
      <div>
        <ui-button @click.stop="showCountrySelect" type="primary">
          Select your country
        </ui-button>
        <country-select v-if="overlayName === portalName && overlayVisibility === 'visible'" />
        <portal-target
          transition="fade"
          :name="overlayName"
        />
      </div>

    `,
    components: { CountrySelect, UiButton },
    store,
    methods: {
      showCountrySelect() {
        this.$store.dispatch('ui/toggleOverlay', { name: this.portalName, visibility: 'visible' });
      },
    },
  }));
