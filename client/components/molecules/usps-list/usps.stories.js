/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import UspsList from './index.vue';

// definition
Vue.component('usps-list', UspsList);


const exampleText = 'Get your code <b>instantly</b> and <b>easy</b>';

const story = () => ({
  components: { UspsList },
  data() {
    return {
      list: new Array(3).fill({ text: exampleText }),
    };
  },
  template: `
    <container class="py-6">
      <usps-list :list="list" />
    </container> `,
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
