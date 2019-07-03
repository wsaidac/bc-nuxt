import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();


jest.mock('storybook-addon-vue-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => { },
}));
