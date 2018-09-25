<template>
  <div>
    <header-banner
      :image-url="banner.imageUrl"
      :payoff="banner.payoff"
    />
    <header-usps
      :usps="usps"
    />
    <div class="container">
      <product-popular
        :products="products"
      />
    </div>
    <ui-icon icon="close" />
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';
import HeaderBanner from '~/components/header/banner';
import HeaderUsps from '~/components/header/usps';
import ProductPopular from '~/components/product/popular';

export default {
  components: {
    UiIcon,
    HeaderBanner,
    HeaderUsps,
    ProductPopular,
  },

  data() {
    return {
      banner: {
        imageUrl:
          'https://static.rapido.com/media/topup/rapido/default/images/headers/default-desktop.jpg',
        payoff:
          '<p>Get all your codes quick,<br><strong>safe and simple!</strong></p>',
      },
      usps: [
        { icon: 'clock', label: 'Order in Minutes' },
        { icon: 'lock', label: 'Pay safely & securely' },
        { icon: 'envelope', label: 'Get your code instantly' },
      ],
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
    };
  },
};
</script>

<style lang="scss">
</style>
