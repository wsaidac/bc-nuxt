<template>
  <div>
    <header-navbar :items="items" />
    <nuxt />
    <rapido-footer />
  </div>
</template>

<script>
import HeaderNavbar from '~/components/header/navbar';
import RapidoFooter from '~/components/footer';

export default {
  components: {
    HeaderNavbar,
    RapidoFooter,
  },

  data() {
    return {
      items: [
        {
          title: 'Mobile recharge',
          icon: 'phone',
          products: [
            {
              id: 1,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 2,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 3,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 4,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 5,
              title: 'Verizon',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
              url: '/verizon',
            },
            {
              id: 4,
              title: 'T-Mobile',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
              url: '/t-mobile',
            },
            {
              id: 6,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 7,
              title: 'Verizon',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
              url: '/verizon',
            },
            {
              id: 8,
              title: 'T-Mobile',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
              url: '/t-mobile',
            },
            {
              id: 9,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 5,
              title: 'Verizon',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
              url: '/verizon',
            },
            {
              id: 10,
              title: 'T-Mobile',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
              url: '/t-mobile',
            },
            {
              id: 11,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 12,
              title: 'Verizon',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
              url: '/verizon',
            },
            {
              id: 13,
              title: 'T-Mobile',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
              url: '/t-mobile',
            },
            {
              id: 14,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 15,
              title: 'T-Mobile',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
              url: '/t-mobile',
            },
            {
              id: 16,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 17,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 18,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 19,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 20,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 21,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
            {
              id: 22,
              title: 'AT&T',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
              url: '/atandt',
            },
          ],
        },
        {
          title: 'Entertainment Gift Cards',
          icon: 'entertainment',
          products: [
            {
              id: 3,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
          ],
        },
        {
          title: 'Game Gift Cards',
          icon: 'gaming',
          products: [
            {
              id: 1,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 2,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 3,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 4,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 5,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
          ],
        },
        {
          title: 'Gift Cards',
          icon: 'giftcard',
          products: [
            {
              id: 1,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 2,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 3,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 4,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 5,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 6,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 7,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 8,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 9,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 10,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 11,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 12,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 13,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 14,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 15,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 16,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
            {
              id: 17,
              title: 'Spotify',
              imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
              url: '/spotify',
            },
          ],
        },
      ],
    };
  },
};
</script>
