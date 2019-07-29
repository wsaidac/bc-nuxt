/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import UspsList from './index.vue';

// definition
Vue.component('usps-list', UspsList);


const exampleText = 'Get your code <b>instantly</b> and <b>easy</b>';

const story = () => ({
  components: { UspsList },
  template: `<usps-list :list="['${exampleText}', '${exampleText}', '${exampleText}']" />`,
});

// stories
storiesOf('Molecules/Usps list', module)
  .add('default', story, {
    info: {},
  })
  .add('mobile/iphone6', story, {
    info: {},
    viewport: { defaultViewport: 'iphone6' },
  })
  .add('ipad', story, {
    info: {},
    viewport: { defaultViewport: 'ipad10p' },
  });
