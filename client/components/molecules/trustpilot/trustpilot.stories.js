import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import { info } from '~~/.storybook/utils'
import store from '~~/.storybook/store';

import createExternalLinksDecorator from 'storybook-external-links/vue'


const trustpilotUrl = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"

const decorator = createExternalLinksDecorator(trustpilotUrl, {
  async: true,
});
// stories
storiesOf('Molecules/TrustPilot', module)
  .addDecorator(decorator)
  .add('footer', () => ({
    template: `
      <vue-trustpilot
        identifier="footer"
        data-style-height="130px"
        data-style-width="100%"
        data-theme="light"
        data-stars="1,2,3,4,5"
        data-schema-type="Organization"
      />
    `,
    store,
  }), info)
