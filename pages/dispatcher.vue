<template>
  <div
    :is="layout"
    :post="post"
  />
</template>

<script>
const mockData = {
  // products: [
  //   {
  //     id: 1,
  //     title: 'Xbox',
  //     imageUrl:
  //       'https://static.rapido.com/media/topup/rapido/default/images/most-popular/xbox-gift-card.png',
  //     url: '/xbox',
  //   },
  //   {
  //     id: 2,
  //     title: 'Playstation',
  //     imageUrl:
  //       'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
  //     url: '/playstation',
  //   },
  //   {
  //     id: 3,
  //     title: 'Spotify',
  //     imageUrl:
  //       'https://static.rapido.com/media/topup/rapido/default/images/most-popular/spotify-gift-card.png',
  //     url: '/spotify',
  //   },
  //   {
  //     id: 4,
  //     title: 'T-Mobile',
  //     imageUrl:
  //       'https://static.rapido.com/media/topup/rapido/default/images/most-popular/t-mobile.png',
  //     url: '/t-mobile',
  //   },
  //   {
  //     id: 5,
  //     title: 'Verizon',
  //     imageUrl:
  //       'https://static.rapido.com/media/topup/rapido/default/images/most-popular/verizon.png',
  //     url: '/verizon',
  //   },
  //   {
  //     id: 6,
  //     title: 'AT&T',
  //     imageUrl:
  //       'https://static.rapido.com/media/topup/rapido/default/images/most-popular/atandt.png',
  //     url: '/atandt',
  //   },
  // ],
  // quickbuyProduct: {
  //   id: 1,
  //   title: 'Verizon Prepaid Refill $5',
  //   price: {
  //     amount: 5.0,
  //     currency: 'USD',
  //   },
  //   url: '/verizon',
  //   imageUrl:
  //     'https://static.rapido.com/categories/2023/Zeichenflche_98.png?1532587359',
  // },
  relatedProducts: [
    { id: 2, title: 'Verizon Prepaid Refill $10', url: '/verizon/10-usd' },
    { id: 3, title: 'Verizon Prepaid Refill $15', url: '/verizon/15-usd' },
    { id: 4, title: 'Verizon Prepaid Refill $20', url: '/verizon/20-usd' },
  ],
};

function slugFromPath(path) {
  if (path === '/') return 'home';
  return path.slice(1);
}

export default {
  components: {
    Home: () => import('~/pages/home'),
    CategoryTerm: () => import('~/pages/category'),
    Product: () => import('~/pages/product'),
  },

  async asyncData({ app, route }) {
    const slug = slugFromPath(route.path);
    const { post } = await app.$q('post', { slug });
    Object.assign(post, mockData);
    return { layout: post.__typename, post };
  },
};
</script>
