/**
 * Needed in order to run Storyshots: https://www.npmjs.com/package/@storybook/addon-storyshots
 */
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();


jest.mock('storybook-addon-vue-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => { },
}));
