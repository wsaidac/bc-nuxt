/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Row from './index.vue';
import { info } from '~~/.storybook/utils';

// definition
Vue.component('row', Row);


// stories
storiesOf('Grid/Row', module)
  .add('default', () => ({
    template: `
      <container class="bg-gray-light rounded border-solid border-gray border">
          <row class="bg-gray p-6 rounded mb-4">
            Row
          </row>
          <row class="bg-gray p-6 rounded mb-4">
            Row 2
          </row>
          <row class="bg-gray p-6 rounded mb-4">
            Row 3
          </row>
      </container>`,
    components: { Row },
  }), info)
  .add(':wrap=false', () => ({
    template: `
      <container class="bg-gray-light rounded border-solid border-gray border">
          <row class="bg-gray rounded mb-4">
            <div style="min-width: 600px" class="border mx-2 p-4 border-solid border-gray-dark">Element</div>
            <div style="min-width: 600px" class="border mx-2 p-4 border-solid border-gray-dark">Element</div>
            <div style="min-width: 600px" class="border mx-2 p-4 border-solid border-gray-dark">Element</div>
            <div style="min-width: 600px" class="border mx-2 p-4 border-solid border-gray-dark">Element</div>
            <div style="min-width: 600px" class="border mx-2 p-4 border-solid border-gray-dark">Element</div>
          </row>
      </container>`,
    components: { Row },
  }), info)
  .add(':wrap=true', () => ({
    template: `
      <container class="bg-gray-light rounded border-solid border-gray border">
          <row wrap class="bg-gray p-6 rounded mb-4">
            <div style="min-width: 600px" class="border border-solid border-gray-dark">Element</div>
            <div style="min-width: 600px" class="border border-solid border-gray-dark">Element</div>
            <div style="min-width: 600px" class="border border-solid border-gray-dark">Element</div>
            <div style="min-width: 600px" class="border border-solid border-gray-dark">Element</div>
      </container>`,
    components: { Row },
  }), info)
  .add('testing', () => ({
    template: `
      <container class="bg-gray-light rounded border-solid border-gray border">
          <row class="bg-gray rounded mb-4">
            <div class="p-6 border mx-2 flex-1 border-solid border-gray-dark">Element</div>
            <div class="p-6 border mx-2 flex-1 border-solid border-gray-dark">Element</div>
            <div class="p-6 border mx-2 flex-1 border-solid border-gray-dark">Element</div>
      </container>`,
    components: { Row },
  }), info);
