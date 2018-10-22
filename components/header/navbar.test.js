import HeaderNavbar from './navbar.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderNavbar', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(HeaderNavbar, {
      propsData: {
        items: [
          {
            title: 'Mobile Recharge',
            icon: 'phone',
            products: [
              {
                id: 1,
                title: 'Dit is de eerste',
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
                id: 6,
                title: 'T-Mobile',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
                url: '/t-mobile',
              },
              {
                id: 7,
                title: 'AT&T',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
                url: '/atandt',
              },
              {
                id: 8,
                title: 'Verizon',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
                url: '/verizon',
              },
              {
                id: 9,
                title: 'T-Mobile',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
                url: '/t-mobile',
              },
              {
                id: 10,
                title: 'AT&T',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
                url: '/atandt',
              },
              {
                id: 11,
                title: 'Verizon',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
                url: '/verizon',
              },
              {
                id: 12,
                title: 'T-Mobile',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
                url: '/t-mobile',
              },
              {
                id: 13,
                title: 'AT&T',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
                url: '/atandt',
              },
              {
                id: 14,
                title: 'Verizon',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
                url: '/verizon',
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
                title: 'T-Mobile',
                imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
                url: '/t-mobile',
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
                title: 'Dit is de laatste',
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
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.header-navbar').exists()).toBe(true);
  });

  it('it should toggle', () => {
    $mounted.setData({ menuOpen: false });
    expect($mounted.find('.header-navbar--open').exists()).toBe(false);
    $mounted.setData({ menuOpen: true });
    expect($mounted.find('.header-navbar--open').exists()).toBe(true);
  });
});
