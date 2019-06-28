// Setup:
// https://medium.com/js-dojo/a-guide-on-using-storybook-with-nuxt-js-1e0018ec51c9
// webpack config for tailwind/SASS:
// https://gist.github.com/ademilter/5f56fe9e56c5eb8725292274c68001c5

import Vue from 'vue'

import { configure, addParameters, addDecorator, setAddon } from '@storybook/vue'
import { themes } from '@storybook/theming';
import { setDefaults } from 'storybook-addon-vue-info'

import JSXAddon from 'storybook-addon-jsx';


const paddingDecorator = () => ({
  template: '<div style="display: flex; padding: 2rem;"><story/></div>',
})

addDecorator(paddingDecorator)
setAddon(JSXAddon)


setDefaults({
  previewStyle: {
    backgroundColor: 'white'
  }
})

// Option defaults.
addParameters({
  options: {
    name: 'Rapido Storybook',
    // theme: themes.dark
  },
});

import '../client/assets/stylesheets/tailwind.css'


// basically load the stories within client/components folder
function loadStories() {
  const req = require.context('../client/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
