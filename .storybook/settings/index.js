
// storybook theme
import theme from './theme';

export default {
  options: {
    name: 'Rapido Storybook',
    theme,
    hierarchyRootSeparator: /\|/,
  },
  backgrounds: [
    { name: 'base', value: '#FFF' },
    { name: 'black', value: '#333' },
    { name: 'main', value: '#f3f3f3', default: true }
  ],
}
