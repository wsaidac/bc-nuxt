// Setup:
// https://medium.com/js-dojo/a-guide-on-using-storybook-with-nuxt-js-1e0018ec51c9
// webpack config for tailwind/SASS:
// https://gist.github.com/ademilter/5f56fe9e56c5eb8725292274c68001c5


import Vue from 'vue';
import Vuex from 'vuex';
import VueMq from 'vue-mq';
import ClickOutside from 'vue-click-outside';
import ScrollTo from 'vue-scrollto'

// storybook tools
import {
  configure,
  addParameters,
  addDecorator,
  setAddon
} from '@storybook/vue'
import JSXAddon from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';

// storybook theme
import theme from './theme';
// animate css file
import 'vue2-animate/dist/vue2-animate.css';

import fakeI18nPlugin from '~~/.storybook/fakeI18nPlugin';
import routerPlugin from '~~/.storybook/fakeRouterPlugin';

/**
 *  config for webfonts-loader
 * https://www.npmjs.com/package/webfonts-loader
 */
// require('../client/assets/iconsWeb.js')
import './iconsWeb.js'
import { breakpoints } from '~/constants';


// hack necessary for storyshots
// why? https://github.com/storybookjs/storybook/issues/1011
if (process.env.NODE_ENV !== 'test') {
  const {
    setDefaults,
    withInfo
  } = require('storybook-addon-vue-info')

  addDecorator(withInfo)
  setDefaults({
    header: false
  })

  require('../client/assets/stylesheets/tailwind.css')
  require('../node_modules/flag-icon-css/css/flag-icon.min.css')
}

setAddon(JSXAddon)

// Option defaults.
addParameters({
  options: {
    name: 'Rapido Storybook',
    theme,
    hierarchyRootSeparator: /\|/,
  },
  backgrounds: [
    { name: 'base', value: '#FFF', default: true },
    { name: 'black', value: '#333' },
    { name: 'main', value: '#f3f3f3' }
  ],
});


Vue.directive('click-outside', ClickOutside);

// i18n
Vue.use(fakeI18nPlugin);
Vue.use(routerPlugin);
Vue.use(ScrollTo)

// Set the global media queries
Vue.use(VueMq, {
  breakpoints: {
    sm: breakpoints.SM,
    md: breakpoints.MD,
    lg: breakpoints.LG,
  },
  // default for SSR
  defaultBreakpoint: 'sm',
});

// it is just for use nuxt-link into storybook
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: `<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>`,
})

// set vuex
Vue.use(Vuex)

// basically load the stories within client/components folder
function loadStories() {
  const req = require.context('../client/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
