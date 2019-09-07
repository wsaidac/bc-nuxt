import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Home from './index.vue';
import { info } from '~~/.storybook/utils'

import mainMock from '~~/.storybook/mocks/main-menu.state.json'
import mock from '~~/.storybook/mocks/homepage.state.json'

import store from '~~/.storybook/store';

const footerMock = get(mock, 'menus.footer', {})
const uspsMock = get(mock, 'shared.usps', {})
const csMock = get(mock, 'shared.customerService', {})

import homePostMock from '~~/.storybook/mocks/home-post.prop.json';
// definition

const header = homePostMock.header;



// definition

store.commit('menus/setMain', mainMock.data.menus.nodes[0])
store.commit('shared/setUsps', uspsMock)
store.commit('shared/setCustomerService', csMock)
store.commit('menus/setFooter', footerMock)


// definition
Vue.component('home', Home)


const highlighted = {
  image: {
    retina: 'https://compass-ssl.xbox.com/assets/5e/5e/5e5e79d1-1ea9-4280-8ead-86dc202122f3.jpg?n=FIFA-19_Multi-Feature-1084_FUT_1600x600.jpg',
    regular: 'https://compass-ssl.xbox.com/assets/5e/5e/5e5e79d1-1ea9-4280-8ead-86dc202122f3.jpg?n=FIFA-19_Multi-Feature-1084_FUT_1600x600.jpg',
    mobile: 'http://media.contentapi.ea.com/content/www-easports/en_US/fifa/ultimate-team/news/2017/fut-online-match-modes/_jcr_content/imageShare.img.jpg',
    alt: 'Fifa 2019',
  },
  title: 'Fifa 19 point',
  buttonText: 'Bestel snes',
}

const post = {
  header: {
    ...header,
    buttonText: '????', // missing-field
    description: 'Geef games, apps en abonnementen cadeau met de Google Play gift code.' // missing-field

  },
  popularProducts: homePostMock.popularProducts,
  highlighted
}


// stories
storiesOf('Templates/Home', module)
  .add('default', () => ({
    data() {
      return {
        post,
      }
    },
    template: `<home :post="post"/>`,
    components: { Home },
    store,
  }), info)
