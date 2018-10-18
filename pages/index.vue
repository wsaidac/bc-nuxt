<template>
  <div>
    <header-banner
      :image-url="header.image.sourceUrl"
      :payoff="header.title"
    />
    <cg-usps
      :usps="usps.items"
    />
    <div class="container">
      <product-popular
        :products="products"
      />
    </div>
    <div class="block block--gray">
      <div class="container">
        <product-quickbuy
          :product="quickbuyProduct"
          :variants="relatedProducts"
        />
      </div>
    </div>
    <div class="block block--gray block--space-between block--mobile-white">
      <div class="container">
        <product-featured
          :categories="main.products"
        />
      </div>
    </div>
    <div class="container">
      <service-banner
        :link="customerService.link"
        :image="customerService.image"
        :title="customerService.primaryText"
        :description="customerService.secondaryText"
      />
      <seo-block
        :title="seoBlock.title"
        :description="seoBlock.text"
      />
    </div>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import ProductPopular from '~/components/product/popular';
import ProductQuickbuy from '~/components/product/quickbuy';
import ProductFeatured from '~/components/product/featured';
import ServiceBanner from '~/components/service/banner';
import SeoBlock from '~/components/seo/block';
import RapidoFooter from '~/components/footer';
import { mapGetters } from 'vuex';

const mockData = {
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
    HeaderBanner,
    CgUsps,
    ProductFeatured,
    ProductPopular,
    ProductQuickbuy,
    ServiceBanner,
    SeoBlock,
    RapidoFooter,
    UiIcon,
  },

  async asyncData({ app }) {
    const { post } = await app.$q('post', { slug: 'home' });
    return Object.assign({}, post, mockData);
  },

  computed: {
    ...mapGetters('menus', ['main']),
  },
};
</script>

<style lang="scss">
</style>
