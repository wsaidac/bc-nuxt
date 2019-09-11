/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Usps from './index.vue';
import { info } from '~~/.storybook/utils';

// definition
Vue.component('usps', Usps);


const exampleText = 'Get your code <b>instantly</b> and <b>easy</b>';


// stories
storiesOf('Atoms/Usps', module)
  .add('default', () => `
    <container class="py-8">
      <row>
        <column>
          <usps text="${exampleText}" />
        </column>
      </row>
    </container>
  `, info);
