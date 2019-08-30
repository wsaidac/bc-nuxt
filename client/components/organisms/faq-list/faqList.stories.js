import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import FaqList from './index.vue';
import { info } from '~~/.storybook/utils'


import mock from '~~/.storybook/mocks/store-category-post.prop.json'

const questions = mock.faqQuestions.questions;

// definition
Vue.component('faq-list', FaqList)


// stories
storiesOf('Organisms/Faq List', module)
  .add('default', () => ({
    data() {
      return {
        questions,
      }
    },
    template: `<faq-questions :questions="questions" />`,
    components: { FaqList },
  }), info)
