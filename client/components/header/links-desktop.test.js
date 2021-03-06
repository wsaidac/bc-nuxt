import HeaderLinksDesktop from './links-desktop.vue';
import { mount } from '~/test/utils/with-context';

const items = [
  {
    title: 'Mobile Rechargeeee',
    icon: 'phone',
    image: {
      regular:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
      retina:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
    },
    categories: [
      {
        id: 1,
        title: 'Dit is de eerstee',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 2,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 3,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 4,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 5,
        title: 'Verizone',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
        },
        url: '/verizon',
      },
      {
        id: 6,
        title: 'T-Mobilee',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
        },
        url: '/t-mobile',
      },
      {
        id: 7,
        title: 'AT&Te',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
      {
        id: 8,
        title: 'Verizone',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
        },
        url: '/verizon',
      },
      {
        id: 9,
        title: 'T-Mobilee',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
        },
        url: '/t-mobile',
      },
      {
        id: 10,
        title: 'AT&Te',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
      {
        id: 11,
        title: 'Verizone',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
        },
        url: '/verizon',
      },
      {
        id: 12,
        title: 'T-Mobilee',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
        },
        url: '/t-mobile',
      },
      {
        id: 13,
        title: 'AT&Te',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
      {
        id: 14,
        title: 'Verizone',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
        },
        url: '/verizon',
      },
      {
        id: 15,
        title: 'T-Mobilee',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
        },
        url: '/t-mobile',
      },
      {
        id: 16,
        title: 'AT&Te',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
      {
        id: 17,
        title: 'T-Mobilee',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
        },
        url: '/t-mobile',
      },
      {
        id: 18,
        title: 'AT&Te',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
      {
        id: 19,
        title: 'AT&Te',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
      {
        id: 20,
        title: 'AT&Te',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
      {
        id: 21,
        title: 'AT&Te',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
      {
        id: 22,
        title: 'Dit is de laatstee',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
        },
        url: '/atandt',
      },
    ],
  },
  {
    title: 'Entertainment Gift Cardse',
    icon: 'entertainment',
    image: {
      regular:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
      retina:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
    },
    categories: [
      {
        id: 3,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
    ],
  },
  {
    title: 'Game Gift Cardse',
    icon: 'gaming',
    image: {
      regular:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
      retina:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
    },
    categories: [
      {
        id: 1,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 2,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 3,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 4,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 5,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
    ],
  },
  {
    title: 'Gift Cardse',
    icon: 'giftcard',
    image: {
      regular:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
      retina:
        'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
    },
    categories: [
      {
        id: 1,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 2,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 3,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 4,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 5,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 6,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 7,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 8,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 9,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 10,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 11,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 12,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 13,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 14,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 15,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 16,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
      {
        id: 17,
        title: 'Spotifye',
        image: {
          regular:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
          retina:
            'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
        },
        url: '/spotify',
      },
    ],
  },
];

describe('HeaderLinksDesktop', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(HeaderLinksDesktop, {
      propsData: {
        items,
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.header-links-desktop').exists()).toBe(true);
  });
});

/* eslint-disable */
export { items };
