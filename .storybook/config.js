// Setup:
// https://medium.com/js-dojo/a-guide-on-using-storybook-with-nuxt-js-1e0018ec51c9
// webpack config for tailwind/SASS:
// https://gist.github.com/ademilter/5f56fe9e56c5eb8725292274c68001c5


import Vue from 'vue';

// Vue plugins
import Vuex from 'vuex';
import VueMq from 'vue-mq';
import ClickOutside from 'vue-click-outside';
import ScrollTo from 'vue-scrollto'
import Fragment from 'vue-fragment'
import TrustpilotPlugin from 'vue-trustpilot'
import Vuelidate from 'vuelidate'


// vue fallback plugins for storybook
import fakeI18nPlugin from '~~/.storybook/vue-plugins/fakeI18n';
import routerPlugin from '~~/.storybook/vue-plugins/fakeRouter';
import nuxtLinkPlugin from '~~/.storybook/vue-plugins/fakeNuxtLink';


// storybook config utils
import configLabel from '~~/config/label';
import settings from '~~/.storybook/settings'

import PortalVue from 'portal-vue'

// storybook tools
import {
  configure,
  addParameters,
  addDecorator,
  setAddon
} from '@storybook/vue'


// decorators
import JSXAddon from 'storybook-addon-jsx';
import TrustpilotDecorator from '~~/.storybook/decorators/trustpilot'

// animate css file
import 'vue2-animate/dist/vue2-animate.css';



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
addDecorator(TrustpilotDecorator)

// Default settings.
addParameters(settings);


/**
 * Vue plugins and directives
 */
Vue.directive('click-outside', ClickOutside);
// load the portal
Vue.use(PortalVue);
// i18n
Vue.use(fakeI18nPlugin);
// router
Vue.use(routerPlugin);
// nuxt-link
Vue.use(nuxtLinkPlugin)
Vue.use(ScrollTo)
Vue.use(Fragment.Plugin)
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
// set vuex
Vue.use(Vuex)
Vue.use(TrustpilotPlugin, configLabel.trustpilot)
Vue.use(Vuelidate)



// basically load the stories within client/components folder
function loadStories() {
  const req = require.context('../client/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
