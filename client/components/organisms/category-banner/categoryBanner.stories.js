import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import CategoryBanner from './index.vue';
import { info } from '~~/.storybook/utils'
import mainMock from '~~/.storybook/mocks/main-menu.state.json'
import mock from '~~/.storybook/mocks/homepage.state.json'

import store from '~~/.storybook/store';


const headerMock = get(mock, 'shared.header', {})

// definition

store.commit('shared/setHeader', headerMock)

// definition
Vue.component('category-banner', CategoryBanner)

const data = {
  "title": "Verizon Prepaid Cards",
  "image": {
    "regular": "https://static.rapido.com/cms/sites/3/2019/03/28095900/4M9aG9zJxzGtcVlvoOQb4z/VerizonLogo.png",
    "retina": "https://static.rapido.com/cms/sites/3/2019/03/28095900/5LCd9gz7t0SSf3Pi8NcOJ3/VerizonLogo.png",
    "altText": "Verizon Prepaid Cards",
    "description": null,
    "__typename": "MediaItem"
  },
  "banner": {
    "desktop": "https://static.rapido.com/cms/sites/3/2019/03/28100001/1yI3Jb4Q0dbAXnWN5HB4ti/Verizon.jpg",
    "mobile": "https://static.rapido.com/cms/sites/3/2019/03/28100001/1yI3Jb4Q0db1YWsjLIsjza/Verizon.jpg",
    "altText": "Verizon Prepaid Cards",
    "description": null,
    "__typename": "MediaItem"
  },
  "__typename": "CategoryHeader"
}

// stories
storiesOf('Organisms/Category Banner', module)
  .add('default', () => ({
    data() {
      return {
        header: data
      };
    },
    template: `
      <category-banner :categoryHeader="header" />`,
    components: { CategoryBanner },
    store,
  }), info)
