import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import FixedNotification from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('fixed-notification', FixedNotification)


// stories
storiesOf('Molecules/Fixed Notification', module)
  .add('default', () => ({
    components: { FixedNotification },
    data() {
      return {
        show: true,
      }
    },
    template: `
      <div>
        <fix-banner
          v-if="show"
          title="Cookiemelding"
          content="Beltegoed.nl maakt gebruik van cookies (en daarmee vergelijkbare technieken) om onze site persoonlijker te maken en je te voorzien van relevante advertenties. Als je verdergaat op onze website gaan we ervan uit dat je dat goedvindt. Meer weten? Bekijk onze cookiepagina."
          url=""
          linkText="Read more"
          @fix-banner__close:click="show = false"
        />
      </div>
    `,
  }), info)
  .add(':type="warning', () => ({
    components: { FixedNotification },
    data() {
      return {
        show: true,
      }
    },
    template: `
      <div>
        <fix-banner
          v-if="show"
          title="Cookiemelding"
          content="Beltegoed.nl maakt gebruik van cookies (en daarmee vergelijkbare technieken) om onze site persoonlijker te maken en je te voorzien van relevante advertenties. Als je verdergaat op onze website gaan we ervan uit dat je dat goedvindt. Meer weten? Bekijk onze cookiepagina."
          url=""
          linkText="Read more"
          type="warning"
          @fix-banner__close:click="show = false"
        />
      </div>
    `,
  }), info)
