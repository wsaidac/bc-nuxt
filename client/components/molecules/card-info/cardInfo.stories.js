/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import InfoCard from './index.vue';
import { info } from '~~/.storybook/utils';

// definition
Vue.component('info-card', InfoCard);


const title = 'Much more play, all on your Phone';

const desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Mauris gravida leo lacinia, convallis tortor vel, posuere ex. Duis quis nisl sit amet ante tempus scelerisque.
  Pellentesque bibendum dolor eget elit pulvinar, in viverra nisi gravida. Suspendisse ut eros tempus,
  cursus lorem sit amet, luctus ex. Curabitur tincidunt maximus nibh, sit amet lobortis dolor semper bibendum.
  Phasellus quis odio odio. Ut sem lectus, tristique non faucibus in, lobortis ut magna. Etiam ut luctus magna.
  Nam et nisi diam. Nullam nibh mauris, tempus vitae tristique vitae, iaculis quis quam.Aenean semper volutpat enim, at porta dui fringilla non.
  Praesent dapibus libero metus. Pellentesque eget nunc ut elit volutpat scelerisque. Nunc nulla lectus, interdum vitae elit in.`;
// stories
storiesOf('Molecules/Info Card', module)
  .add('default', () => ({
    components: {
      InfoCard,
    },
    template: `
      <info-card
        title="${title}"
        content="${desc}"
      />
    `,
  }), info);
