import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import CategoryList from './index.vue';
import { info } from '~~/.storybook/utils'

import store from '~~/.storybook/store';
import mainMock from '~~/.storybook/mocks/main-menu.state.json'


// definition
Vue.component('category-list', CategoryList)


store.commit('menus/setMain', mainMock.data.menus.nodes[0])

// stories
storiesOf('Organisms/CategoryList', module)
  .add('default', () => ({
    template: `<category-list />`,
    components: { CategoryList },
    store,
  }), info)
