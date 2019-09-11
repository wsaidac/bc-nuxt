import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Popup from './index.vue';
import { info } from '~~/.storybook/utils'
import {
  action,
} from '@storybook/addon-actions';


// definition
Vue.component('popup', Popup)


// stories
storiesOf('Molecules/Popup', module)
  .add('default', () => ({
    template: `
      <container class="py-6">
        <popup
          title="This product is not usable in your country"
          description="The product you selected can not be used in Germany. It’s possible to buy the same product in our German store. Do you want to be redirected to Guthaben.de?"
          mainButtonText="Go to German store"
          secondaryButtonText="No, stay here"
          @popup__close:click="close"
          @popup__main-button:click="primaryButton"
          @popup__secondary-button:click="secondaryButton"
        />
      </container>

    `,
    components: { Popup },
    methods: {
      close: action('popup__close:click'),
      primaryButton: action('popup__main-button:click'),
      secondaryButton: action('popup__secondary-button:click'),
    }
  }), info)
  .add('without secondary button', () => ({
    template: `
      <popup
        title="This product is not usable in your country"
        description="The product you selected can not be used in Germany. It’s possible to buy the same product in our German store. Do you want to be redirected to Guthaben.de?"
        mainButtonText="Go to German store"
        @popup__close:click="close"
        @popup__main-button:click="primaryButton"
      />
    `,
    components: { Popup },
    methods: {
      close: action('popup__close:click'),
      primaryButton: action('popup__main-button:click'),
    }
  }), info)
  .add(':warning', () => ({
    template: `
      <popup
        title="This product is not usable in your country"
        description="The product you selected can not be used in Germany. It’s possible to buy the same product in our German store. Do you want to be redirected to Guthaben.de?"
        mainButtonText="Go to German store"
        secondaryButtonText="No, stay here"
        type="warning"
        @popup__close:click="close"
        @popup__main-button:click="primaryButton"
        @popup__secondary-button:click="secondaryButton"
      />
    `,
    components: { Popup },
    methods: {
      close: action('popup__close:click'),
      primaryButton: action('popup__main-button:click'),
      secondaryButton: action('popup__secondary-button:click'),
    }
  }), info)

