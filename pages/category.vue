<template>
  <div class="cg-category">
    <header-banner
      :image-url="image.sourceUrl"
      payoff="https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png"
    />
    <!-- <header-usps :usps="usps" />
    <header-mobile-usps
      v-if="usps"
      :usps="usps" /> -->
    <category-title-bar :title="productTitle" />
    <div class="block block--gray">
      <div class="container">
        <category-products :products="productsMock" />
      </div>
    </div>
    <!-- <category-info
      :usps="usps"
      :info="info"
    /> -->
    <ui-breadcrumbs
      :pages="pages"
      class="cg-category__breadcrumbs"
    />
  </div>
</template>

<script>
import RapidoFooter from '~/components/footer';
import HeaderBanner from '~/components/header/banner';
import HeaderUsps from '~/components/header/usps';
import HeaderMobileUsps from '~/components/header/mobile-usps';
import CategoryTitleBar from '~/components/category/title-bar';
import CategoryProducts from '~/components/category/products';
import CategoryInfo from '~/components/category/info';
import { UiBreadcrumbs } from '~/components/ui';

export default {
  components: {
    RapidoFooter,
    HeaderBanner,
    HeaderMobileUsps,
    HeaderUsps,
    CategoryTitleBar,
    CategoryProducts,
    CategoryInfo,
    UiBreadcrumbs,
  },

  data() {
    return {
      pages: [
        { url: '/', label: 'Home', title: 'Rapido Home is cool' },
        { url: '/category', label: 'category', title: 'cat' },
        { url: '/faq', label: 'FAQ', title: 'faq' },
        { url: '/category', label: 'category', title: 'cat' },
        { label: 'prod', title: 'prod' },
      ],
      usps: {
        items: [
          {
            text: 'Order in Minutes',
            image: {
              sourceUrl: '/app/uploads/seeds/usp-icon-fast.png',
            },
          },
        ],
      },
      image: {
        sourceUrl: 'https://static.rapido.com/media/topup/rapido/default/images/headers/default-desktop.jpg?v=1',
      },
      productTitle: 'Xbox Gift Card',
      productsMock: [
        {
          id: 2,
          price: {
            amount: 5,
            currency: 'USD',
          },
          title: 'Verizon Prepaid Refill $10',
          imageUrl: 'https://static.rapido.com/categories/2098/xbox_logo_09.png?1538569956',
        },
        {
          id: 5,
          price: {
            amount: 6,
            currency: 'USD',
          },
          title: 'Verizon Prepaid Refill $20',
          imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
        },
        {
          id: 6,
          price: {
            amount: 7,
            currency: 'USD',
          },
          title: 'Verizon Prepaid Refill $20',
          imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
        },
      ],
      info: {
        productQuestions: [
          {
            title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
          },
          {
            title: 'What kind of account do I need to redeem my Xbox Gift Card?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
          },
          {
            title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
          },
          {
            title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
          },
          {
            title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
          },
          {
            title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
          },
          {
            title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
          },
          {
            title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
          },
        ],
        buyQuestions: {
          title: 'Xbox digital gift Card',
          questions: [
            {
              question: 'What am i buying?',
              answer: 'You can use this Xbox Gift Card to pay in the online Microsoft Gaming Store. The Xbox Microsoft Store offers games, DLC, subscriptions and much more.',
            },
            {
              question: 'What am i buying?',
              answer: 'You can use this Xbox Gift Card to pay in the online Microsoft Gaming Store. The Xbox Microsoft Store offers games, DLC, subscriptions and much more.',
            },
            {
              question: 'What am i buying?',
              answer: 'You can use this Xbox Gift Card to pay in the online Microsoft Gaming Store. The Xbox Microsoft Store offers games, DLC, subscriptions and much more.',
            },
            {
              question: 'What am i buying?',
              answer: 'You can use this Xbox Gift Card to pay in the online Microsoft Gaming Store. The Xbox Microsoft Store offers games, DLC, subscriptions and much more.',
            },
          ],
        },
        redeem: {
          title: 'Redeem an Xbox Gift Card',
          text: 'Buy games, movies, TV, music, apps and more on Xbox and Windows.*',
        },
      },
    };
  },

  async asyncData({ app }) {
    const { post } = await app.$q('post', { slug: 'home' });
    return Object.assign({}, post);
  },

  async fetch({ app, store }) {
    const { menus } = await app.$q('menus', { slug: 'main' });
    store.commit('menus/setMain', menus.nodes[0]);
  },
};
</script>

<style lang="scss">
.cg-category {
  @include media-breakpoint-only('xs') {
    &__breadcrumbs {
      display: none !important;
    }
  }
}
</style>
