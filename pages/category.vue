<template>
  <div>
    <header-banner
      :image-url="image.sourceUrl"
      :payoff="title"
    />
    <header-usps :usps="usps" />
    <header-mobile-usps :usps="usps" />
    <category-title-bar :title="productTitle" />
    <div class="block block--gray">
      <div class="container">
        <category-products :products="productsMock" />
      </div>
    </div>
    <category-info
      :usps="usps"
      :info="info"

    />
    <p>need some help? go to FAQ's</p>
    <p>terms & conditions</p>
    <rapido-footer />
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

const mockData = {
  infoForCategoryPage: {
    product: {
      id: 1,
      title: 'Xbox',
      imageUrl:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/xbox-gift-card.png',
      url: '/xbox',
    },
    buyOptions: [
      { id: 2, title: 'Verizon Prepaid Refill $10', url: '/verizon/10-usd' },
      { id: 3, title: 'Verizon Prepaid Refill $15', url: '/verizon/15-usd' },
      { id: 4, title: 'Verizon Prepaid Refill $20', url: '/verizon/20-usd' },
    ],
  },
  products: [
    {
      id: 1,
      title: 'Xbox',
      imageUrl:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/xbox-gift-card.png',
      url: '/xbox',
    },
    {
      id: 2,
      title: 'Playstation',
      imageUrl:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
      url: '/playstation',
    },
    {
      id: 3,
      title: 'Spotify',
      imageUrl:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
      url: '/spotify',
    },
    {
      id: 4,
      title: 'T-Mobile',
      imageUrl:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
      url: '/t-mobile',
    },
    {
      id: 5,
      title: 'Verizon',
      imageUrl:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
      url: '/verizon',
    },
    {
      id: 6,
      title: 'AT&T',
      imageUrl:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
      url: '/atandt',
    },
  ],
  quickbuyProduct: {
    id: 1,
    title: 'Verizon Prepaid Refill $5',
    price: {
      amount: 5.0,
      currency: 'USD',
    },
    url: '/verizon',
    imageUrl:
      'https://static.rapido.com/categories/2023/Zeichenflche_98.png?1532587359',
  },
  relatedProducts: [
    { id: 2, title: 'Verizon Prepaid Refill $10', url: '/verizon/10-usd' },
    { id: 3, title: 'Verizon Prepaid Refill $15', url: '/verizon/15-usd' },
    { id: 4, title: 'Verizon Prepaid Refill $20', url: '/verizon/20-usd' },
  ],
};

export default {
  components: {
    RapidoFooter,
    HeaderBanner,
    HeaderMobileUsps,
    HeaderUsps,
    CategoryTitleBar,
    CategoryProducts,
    CategoryInfo,
  },

  data() {
    return {
      mockData,
      image: {
        sourceUrl: 'https://static.rapido.com/media/topup/rapido/default/images/headers/default-desktop.jpg?v=1',
      },
      productTitle: 'Xbox Gift Card',
      productsMock: [
        {
          id: 2,
          price: '$15.00',
          title: 'Verizon Prepaid Refill $10',
          imageUrl: 'https://static.rapido.com/categories/2098/xbox_logo_09.png?1538569956',
        },
        {
          id: 3,
          price: '$20.00',
          title: 'Verizon Prepaid Refill $15',
          imageUrl: 'https://static.rapido.com/categories/2098/xbox_logo_09.png?1538569956',
        },
        {
          id: 4,
          price: '$25.00',
          title: 'Verizon Prepaid Refill $20',
          imageUrl: 'https://static.rapido.com/categories/2098/xbox_logo_09.png?1538569956',
        },
        {
          id: 5,
          price: '$25.00',
          title: 'Verizon Prepaid Refill $20',
          imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
        },
        {
          id: 6,
          price: '$25.00',
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
    return Object.assign({}, post, mockData);
  },
  async fetch({ app, store }) {
    const { menus } = await app.$q('menus', { slug: 'main' });
    store.commit('menus/setMain', menus.nodes[0]);
  },
};
</script>

<style lang="scss">

</style>
