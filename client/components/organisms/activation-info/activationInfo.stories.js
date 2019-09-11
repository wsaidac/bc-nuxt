import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import ActivationInfo from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('activation-info', ActivationInfo)

const data = {
  "title": "Redeem your Spotify Premium Code",
  "text": "With Spotify, it’s easy to find the right music for every moment – on your phone, your computer, your tablet and more. There are millions of tracks on Spotify. So whether you’re working out, partying or relaxing, the right music is always at your fingertips. Choose what you want to listen to, or let Spotify surprise you. You can also browse through the music collections of friends, artists and celebrities, or create a radio station and just sit back. Soundtrack your life with Spotify. Surprise you.",
  "__typename": "InfoBlock"
}

// stories
storiesOf('Organisms/Activation Info', module)
  .add('default', () => ({
    data() {
      return {
        info: data,
      }
    },
    template: `<container class="py-8"><activation-info :info="info" /></container>`,
    components: { ActivationInfo },
  }), info)
