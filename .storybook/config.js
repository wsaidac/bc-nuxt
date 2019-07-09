// Setup:
// https://medium.com/js-dojo/a-guide-on-using-storybook-with-nuxt-js-1e0018ec51c9
// webpack config for tailwind/SASS:
// https://gist.github.com/ademilter/5f56fe9e56c5eb8725292274c68001c5


const Vue = require('vue')

const { configure, addParameters, addDecorator, setAddon } = require('@storybook/vue')
const { themes } = require('@storybook/theming');

const JSXAddon = require('storybook-addon-jsx');

const paddingDecorator = () => ({
  template: '<div style="display: flex; padding: 2rem;"><story/></div>',
})


// hack necessary for storyshots
// why? https://github.com/storybookjs/storybook/issues/1011
if (process.env.NODE_ENV !== 'test') {
  const { setDefaults, withInfo } = require('storybook-addon-vue-info')

  addDecorator(withInfo)
  setDefaults({
    header: false
  })

  require('../client/assets/stylesheets/tailwind.css')
}


addDecorator(paddingDecorator)
setAddon(JSXAddon)



// Option defaults.
addParameters({
  options: {
    name: 'Rapido Storybook',
    // theme: themes.dark
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
  },
});



// basically load the stories within client/components folder
function loadStories() {
  const req = require.context('../client/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
