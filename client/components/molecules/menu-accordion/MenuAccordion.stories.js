import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Item from './item.vue';
import MenuAccordion from './index.vue'
import { info } from '~~/.storybook/utils'
import {
  action,
} from '@storybook/addon-actions';

// definition
Vue.component('menu-accordion-item', Item)
Vue.component('menu-accordion', MenuAccordion)


const items = [
  {
    label: 'Mobile Recharge',
    slug: 'recharge',
    icon: 'mobile-recharge',
  },
  {
    label: 'Prepaid credit cards',
    slug: 'prepaid',
    icon: 'prepaid-cards'
  },
  {
    label: 'Entertainment',
    slug: 'entertainment',
    icon: 'entertainment',
  },
  {
    label: "Game cards",
    slug: 'gamecards',
    icon: 'gamecards',
  },
  {
    label: "Gift cards",
    slug: 'gift-cards',
    icon: 'giftcards',
  }
]

// stories
storiesOf('Atoms/Menu Accordion Item', module)
  .add('default', () => ({
    template: `
      <menu-accordion-item
        icon="entertainment"
        label="Mobile Recharge"
        slug="recharge"
        @menu-accordion-item:click="action"
      />`,
    components: { Item },
    methods: {
      action: action('menu_accordion-item')
    }
  }), info)

// stories
storiesOf('Molecules/Menu Accordion', module)
  .add('default', () => ({
    data() {
      return {
        list: items,
      }
    },
    template: `
      <menu-accordion
        :list="list"
      />`,
    components: { Item },
    methods: {
      action: action('menu_accordion-item')
    }
  }), info)
  .add('without icons', () => ({
    data() {
      return {
        list: items.map(({ label, slug }) => ({
          label, slug
        })),
      }
    },
    template: `
      <menu-accordion
        :list="list"
      />`,
    components: { Item },
    methods: {
      action: action('menu_accordion-item')
    }
  }), info)
