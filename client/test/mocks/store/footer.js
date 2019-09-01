const footerLinks = {
  aboutUs: {
    title: 'About us',
    url: 'about-us',
  },
  paymentMethods: {
    title: 'Payment options',
    url: 'payment-methods',
  },
  generalConditions: {
    title: 'Conditions',
    url: 'general-conditions',
  },
  cookieStatement: {
    title: 'Cookie Statement',
    url: 'cookies',
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    url: 'privacy',
  },
};

const serviceLinks = [{ title: 'About us', url: 'about-us' }, { title: 'Payment options', url: 'payment-methods' }];

const categoryLinks = [
  {
    title: 'Mobile recharge',
    url: '/null',
    categories: [
      {
        slug: 'access-wireless',
        title: 'Access Wireless',
        url: '/access-wireless-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095457/2lgMWo1ir9QvW4WRmD7H8B/AccessWirelessLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095457/4d6c5JWccZMw7uv7K3Mi2A/AccessWirelessLogo.png',
          altText: 'Access Wireless Refill',
          description: null,
        },
      },
      {
        slug: 'airvoice',
        title: 'Airvoice',
        url: '/airvoice-wireless-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095841/2lgMWo1ir9QvW4WRmD7H8B/AirvoiceLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095841/4d6c5JWccZMw7uv7K3Mi2A/AirvoiceLogo.png',
          altText: 'Airvoice Wireless Refill',
          description: null,
        },
      },
      {
        slug: 'at-amp-t',
        title: 'AT&amp;T',
        url: '/at-t-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/04/10111938/2lgMWo1ir9QvW4WRmD7H8B/ATandTLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/04/10111938/4d6c5JWccZMw7uv7K3Mi2A/ATandTLogo.png',
          altText: '',
          description: null,
        },
      },
      {
        slug: 'cintex-wireless',
        title: 'Cintex Wireless',
        url: '/cintex-wireless-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095843/2lgMWo1ir9QvW4WRmD7H8B/CintexWirelessLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095843/4d6c5JWccZMw7uv7K3Mi2A/CintexWirelessLogo.png',
          altText: 'Cintex Wireless Refill',
          description: null,
        },
      },
      {
        slug: 'ecomobile',
        title: 'Ecomobile',
        url: '/ecomobile-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/2lgMWo1ir9QvW4WRmD7H8B/EcoMobileLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/4d6c5JWccZMw7uv7K3Mi2A/EcoMobileLogo.png',
          altText: 'ECO Mobile Refill',
          description: null,
        },
      },
      {
        slug: 'good-2-go-mobile',
        title: 'Good2Go Mobile',
        url: '/good2go-mobile-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095846/2lgMWo1ir9QvW4WRmD7H8B/Good2GoMobileLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095846/4d6c5JWccZMw7uv7K3Mi2A/Good2GoMobileLogo.png',
          altText: 'Good2GO Mobile Refill',
          description: null,
        },
      },
      {
        slug: 'h-2-o',
        title: 'H2O',
        url: '/h2o-wireless-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/04/16081408/2lgMWo1ir9QvW4WRmD7H8B/h2o_logo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/04/16081408/4d6c5JWccZMw7uv7K3Mi2A/h2o_logo.jpg',
          altText: 'H2O Wireless Refill',
          description: null,
        },
      },
      {
        slug: 'life-wireless',
        title: 'Life Wireless',
        url: '/life-wireless-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095848/2lgMWo1ir9QvW4WRmD7H8B/LifeWirelessLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095848/4d6c5JWccZMw7uv7K3Mi2A/LifeWirelessLogo.png',
          altText: 'Life Wireless Refill',
          description: null,
        },
      },
      {
        slug: 'my-phone-2-go',
        title: 'MyPhone2GO',
        url: '/myphone2go-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095849/2lgMWo1ir9QvW4WRmD7H8B/MyPhone2GoLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095849/4d6c5JWccZMw7uv7K3Mi2A/MyPhone2GoLogo.jpg',
          altText: 'MyPhone2GO Refill',
          description: null,
        },
      },
      {
        slug: 'net-10',
        title: 'Net10',
        url: '/net10-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095850/2lgMWo1ir9QvW4WRmD7H8B/Net10Logo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095850/4d6c5JWccZMw7uv7K3Mi2A/Net10Logo.png',
          altText: 'Net10 Refill',
          description: null,
        },
      },
      {
        slug: 'page-plus',
        title: 'Page Plus',
        url: '/page-plus-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095852/2lgMWo1ir9QvW4WRmD7H8B/PagePlusLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095852/4d6c5JWccZMw7uv7K3Mi2A/PagePlusLogo.png',
          altText: 'Page Plus Refill',
          description: null,
        },
      },
      {
        slug: 'real-mobile',
        title: 'Real Mobile',
        url: '/real-mobile-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095853/2lgMWo1ir9QvW4WRmD7H8B/RealMobileLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095853/4d6c5JWccZMw7uv7K3Mi2A/RealMobileLogo.png',
          altText: 'REAL Mobile Refill',
          description: null,
        },
      },
      {
        slug: 'red-pocket',
        title: 'Red Pocket',
        url: '/red-pocket-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095854/2lgMWo1ir9QvW4WRmD7H8B/RedPocketLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095854/4d6c5JWccZMw7uv7K3Mi2A/RedPocketLogo.png',
          altText: 'Red Pocket Refill',
          description: null,
        },
      },
      {
        slug: 'safe-link-wireless',
        title: 'SafeLink Wireless',
        url: '/safelink-wireless-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095855/2lgMWo1ir9QvW4WRmD7H8B/SafeLinkWireless.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095855/4d6c5JWccZMw7uv7K3Mi2A/SafeLinkWireless.jpg',
          altText: 'SafeLink Wireless Data Bundles',
          description: null,
        },
      },
      {
        slug: 'simple-mobile',
        title: 'Simple Mobile',
        url: '/simple-mobile-reup',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095855/2lgMWo1ir9QvW4WRmD7H8B/SimpleMobileLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095855/4d6c5JWccZMw7uv7K3Mi2A/SimpleMobileLogo.png',
          altText: 'Simple Mobile ReUp',
          description: null,
        },
      },
      {
        slug: 't-mobile',
        title: 'T-Mobile',
        url: '/t-mobile-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095858/2lgMWo1ir9QvW4WRmD7H8B/TMobileLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095858/4d6c5JWccZMw7uv7K3Mi2A/TMobileLogo.png',
          altText: 'T-Mobile Refill',
          description: null,
        },
      },
      {
        slug: 'telcel-america',
        title: 'Telcel America',
        url: '/telcel-america-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095857/2lgMWo1ir9QvW4WRmD7H8B/TelcelAmericaLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095857/4d6c5JWccZMw7uv7K3Mi2A/TelcelAmericaLogo.png',
          altText: 'Telcel America Refill',
          description: null,
        },
      },
      {
        slug: 'total-wireless',
        title: 'Total Wireless',
        url: '/total-wireless-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095858/2lgMWo1ir9QvW4WRmD7H8B/TotalWirelessLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095858/4d6c5JWccZMw7uv7K3Mi2A/TotalWirelessLogo.png',
          altText: 'Total Wireless Refill',
          description: null,
        },
      },
      {
        slug: 'tracfone',
        title: 'Tracfone',
        url: '/tracfone-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095859/2lgMWo1ir9QvW4WRmD7H8B/TracfoneLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095859/4d6c5JWccZMw7uv7K3Mi2A/TracfoneLogo.png',
          altText: 'TracFone Minutes Refill',
          description: null,
        },
      },
      {
        slug: 'verizon',
        title: 'Verizon',
        url: '/verizon-prepaid-refill',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095900/2lgMWo1ir9QvW4WRmD7H8B/VerizonLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095900/4d6c5JWccZMw7uv7K3Mi2A/VerizonLogo.png',
          altText: 'Verizon Prepaid Cards',
          description: null,
        },
      },
    ],
    icon: 'giftcards',
    slug: 'mobile-recharge',
  },
  {
    title: 'Entertainment Gift Cards',
    url: '/null',
    categories: [
      {
        slug: 'google-play',
        title: 'Google Play',
        url: '/google-play-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095847/2lgMWo1ir9QvW4WRmD7H8B/GooglePlayLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095847/4d6c5JWccZMw7uv7K3Mi2A/GooglePlayLogo.png',
          altText: 'Google Play Gift Card',
          description: null,
        },
      },
      {
        slug: 'spotify',
        title: 'Spotify',
        url: '/spotify-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095856/2lgMWo1ir9QvW4WRmD7H8B/SpotifyLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095856/4d6c5JWccZMw7uv7K3Mi2A/SpotifyLogo.png',
          altText: 'Spotify Gift Card',
          description: null,
        },
      },
    ],
    icon: 'giftcards',
    slug: 'entertainment-gift-cards',
  },
  {
    title: 'Game Gift Cards',
    url: '/null',
    categories: [
      {
        slug: 'gamestop',
        title: 'Gamestop',
        url: '/gamestop-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095846/2lgMWo1ir9QvW4WRmD7H8B/GamestopLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095846/4d6c5JWccZMw7uv7K3Mi2A/GamestopLogo.png',
          altText: 'GameStop Gift Card',
          description: null,
        },
      },
      {
        slug: 'nintendo-e-shop',
        title: 'Nintendo eShop',
        url: '/nintendo-eshop-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095850/2lgMWo1ir9QvW4WRmD7H8B/NintendoEshopLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095850/4d6c5JWccZMw7uv7K3Mi2A/NintendoEshopLogo.png',
          altText: 'Nintendo eShop Card',
          description: null,
        },
      },
      {
        slug: 'play-station-network',
        title: 'PlayStation Network',
        url: '/psn-code',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095853/2lgMWo1ir9QvW4WRmD7H8B/PlaystationLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095853/4d6c5JWccZMw7uv7K3Mi2A/PlaystationLogo.png',
          altText: 'PSN Card',
          description: null,
        },
      },
      {
        slug: 'xbox-gift-card',
        title: 'Xbox Gift Card',
        url: '/xbox-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095900/2lgMWo1ir9QvW4WRmD7H8B/XBoxLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095900/4d6c5JWccZMw7uv7K3Mi2A/XBoxLogo.png',
          altText: 'Xbox Gift Card',
          description: null,
        },
      },
      {
        slug: 'fifa-points',
        title: 'FIFA Points',
        url: '/fifa-points',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095846/2lgMWo1ir9QvW4WRmD7H8B/FIFALogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095846/4d6c5JWccZMw7uv7K3Mi2A/FIFALogo.png',
          altText: 'FIFA Points - Xbox and PlayStation',
          description: null,
        },
      },
      {
        slug: 'rune-scape',
        title: 'RuneScape',
        url: '/runescape-membership-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095854/2lgMWo1ir9QvW4WRmD7H8B/RunescapeLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095854/4d6c5JWccZMw7uv7K3Mi2A/RunescapeLogo.png',
          altText: 'Runescape Membership Card',
          description: null,
        },
      },
    ],
    icon: 'giftcards',
    slug: 'game-gift-cards',
  },
  {
    title: 'Gift Cards',
    url: '/null',
    categories: [
      {
        slug: 'adidas',
        title: 'Adidas',
        url: '/adidas-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095840/2lgMWo1ir9QvW4WRmD7H8B/AdidasLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095840/4d6c5JWccZMw7uv7K3Mi2A/AdidasLogo.jpg',
          altText: 'Adidas Gift Card',
          description: null,
        },
      },
      {
        slug: 'american-eagle',
        title: 'American Eagle',
        url: '/american-eagle-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095841/2lgMWo1ir9QvW4WRmD7H8B/AmericanEagleLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095841/4d6c5JWccZMw7uv7K3Mi2A/AmericanEagleLogo.png',
          altText: 'American Eagle Gift Card',
          description: null,
        },
      },
      {
        slug: 'barnes-amp-noble',
        title: 'Barnes &amp; Noble',
        url: '/barnes-and-noble-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095842/2lgMWo1ir9QvW4WRmD7H8B/BarnesAndNobleLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095842/4d6c5JWccZMw7uv7K3Mi2A/BarnesAndNobleLogo.png',
          altText: 'Barnes and Noble Gift Card',
          description: null,
        },
      },
      {
        slug: 'bath-amp-body-works',
        title: 'Bath &amp; Body Works',
        url: '/bath-and-body-works-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095842/2lgMWo1ir9QvW4WRmD7H8B/BathAndBodyWorksLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095842/4d6c5JWccZMw7uv7K3Mi2A/BathAndBodyWorksLogo.jpg',
          altText: 'Bath and Body Works Gift Card',
          description: null,
        },
      },
      {
        slug: 'bed-bath-amp-beyond',
        title: 'Bed Bath &amp; Beyond',
        url: '/bed-bath-and-beyond-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28102843/2lgMWo1ir9QvW4WRmD7H8B/BedBathAndBeyondLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28102843/4d6c5JWccZMw7uv7K3Mi2A/BedBathAndBeyondLogo.jpg',
          altText: 'Bed Bath and Beyond Gift Card',
          description: null,
        },
      },
      {
        slug: 'delta-airlines',
        title: 'Delta Airlines',
        url: '/delta-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095844/2lgMWo1ir9QvW4WRmD7H8B/DeltaLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095844/4d6c5JWccZMw7uv7K3Mi2A/DeltaLogo.jpg',
          altText: 'Delta Gift Card',
          description: null,
        },
      },
      {
        slug: 'dominos',
        title: 'Domino\'s',
        url: '/dominos-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095844/2lgMWo1ir9QvW4WRmD7H8B/DominosLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095844/4d6c5JWccZMw7uv7K3Mi2A/DominosLogo.jpg',
          altText: 'Dominos Gift Card',
          description: null,
        },
      },
      {
        slug: 'dunkin-donuts',
        title: 'Dunkin\' Donuts',
        url: '/dunkin-donuts-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/2lgMWo1ir9QvW4WRmD7H8B/DunkinDonutsLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/4d6c5JWccZMw7uv7K3Mi2A/DunkinDonutsLogo.jpg',
          altText: 'Dunkin Donuts Gift Card',
          description: null,
        },
      },
      {
        slug: 'e-bay',
        title: 'eBay',
        url: '/ebay-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/2lgMWo1ir9QvW4WRmD7H8B/eBayLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/4d6c5JWccZMw7uv7K3Mi2A/eBayLogo.png',
          altText: 'eBay Gift Card',
          description: null,
        },
      },
      {
        slug: 'express',
        title: 'Express',
        url: '/express-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/2lgMWo1ir9QvW4WRmD7H8B/ExpressLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/4d6c5JWccZMw7uv7K3Mi2A/ExpressLogo.png',
          altText: 'Express Gift Card',
          description: null,
        },
      },
      {
        slug: 'groupon',
        title: 'Groupon',
        url: '/groupon-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095847/2lgMWo1ir9QvW4WRmD7H8B/GrouponLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095847/4d6c5JWccZMw7uv7K3Mi2A/GrouponLogo.jpg',
          altText: 'Groupon Gift Card',
          description: null,
        },
      },
      {
        slug: 'hotels-com',
        title: 'Hotels.com',
        url: '/hotels-com-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095847/2lgMWo1ir9QvW4WRmD7H8B/HotelsLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095847/4d6c5JWccZMw7uv7K3Mi2A/HotelsLogo.png',
          altText: 'Hotels.com Gift Card',
          description: null,
        },
      },
      {
        slug: 'kohls',
        title: 'Kohls',
        url: '/kohls-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095848/2lgMWo1ir9QvW4WRmD7H8B/KohlsLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095848/4d6c5JWccZMw7uv7K3Mi2A/KohlsLogo.png',
          altText: 'Kohl\'s Gift Card',
          description: null,
        },
      },
      {
        slug: 'lowes',
        title: 'Lowes',
        url: '/lowes-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095848/2lgMWo1ir9QvW4WRmD7H8B/LowesLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095848/4d6c5JWccZMw7uv7K3Mi2A/LowesLogo.jpg',
          altText: 'Lowe\'s Gift Card',
          description: null,
        },
      },
      {
        slug: 'macys',
        title: 'Macy\'s',
        url: '/macys-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095849/2lgMWo1ir9QvW4WRmD7H8B/MacysLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095849/4d6c5JWccZMw7uv7K3Mi2A/MacysLogo.png',
          altText: 'Macy\'s Gift Card',
          description: null,
        },
      },
      {
        slug: 'marshalls',
        title: 'Marshalls',
        url: '/marshalls-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095849/2lgMWo1ir9QvW4WRmD7H8B/MarshallsLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095849/4d6c5JWccZMw7uv7K3Mi2A/MarshallsLogo.jpg',
          altText: 'Marshalls Gift Card',
          description: null,
        },
      },
      {
        slug: 'nike',
        title: 'Nike',
        url: '/nike-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095850/2lgMWo1ir9QvW4WRmD7H8B/NikeLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095850/4d6c5JWccZMw7uv7K3Mi2A/NikeLogo.png',
          altText: 'Nike Gift Card',
          description: null,
        },
      },
      {
        slug: 'nordstrom',
        title: 'Nordstrom',
        url: '/nordstrom-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095850/2lgMWo1ir9QvW4WRmD7H8B/NordstromLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095850/4d6c5JWccZMw7uv7K3Mi2A/NordstromLogo.png',
          altText: 'Nordstrom Gift Card',
          description: null,
        },
      },
      {
        slug: 'nordstrom-rack',
        title: 'Nordstrom Rack',
        url: '/nordstrom-rack-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095851/2lgMWo1ir9QvW4WRmD7H8B/NordstromRackLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095851/4d6c5JWccZMw7uv7K3Mi2A/NordstromRackLogo.png',
          altText: 'Nordstrom Rack Gift Card',
          description: null,
        },
      },
      {
        slug: 'old-navy',
        title: 'Old Navy',
        url: '/old-navy-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095851/2lgMWo1ir9QvW4WRmD7H8B/OldNavyLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095851/4d6c5JWccZMw7uv7K3Mi2A/OldNavyLogo.jpg',
          altText: 'Old Navy Gift Card',
          description: null,
        },
      },
      {
        slug: 'panera-bread',
        title: 'Panera Bread',
        url: '/panera-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095852/2lgMWo1ir9QvW4WRmD7H8B/PaneraLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095852/4d6c5JWccZMw7uv7K3Mi2A/PaneraLogo.jpg',
          altText: 'Panera Gift Card',
          description: null,
        },
      },
      {
        slug: 'petco',
        title: 'Petco',
        url: '/petco-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095852/2lgMWo1ir9QvW4WRmD7H8B/PetcoLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095852/4d6c5JWccZMw7uv7K3Mi2A/PetcoLogo.jpg',
          altText: 'Petco Gift Card',
          description: null,
        },
      },
      {
        slug: 'redbox',
        title: 'Redbox',
        url: '/redbox-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095853/2lgMWo1ir9QvW4WRmD7H8B/RedboxLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095853/4d6c5JWccZMw7uv7K3Mi2A/RedboxLogo.png',
          altText: 'Redbox Gift Card',
          description: null,
        },
      },
      {
        slug: 'rei',
        title: 'REI',
        url: '/rei-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095854/2lgMWo1ir9QvW4WRmD7H8B/REILogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095854/4d6c5JWccZMw7uv7K3Mi2A/REILogo.jpg',
          altText: 'REI Gift Card',
          description: null,
        },
      },
      {
        slug: 'sephora',
        title: 'Sephora',
        url: '/sephora-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/04/09102313/2lgMWo1ir9QvW4WRmD7H8B/Sephora.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/04/09102313/4d6c5JWccZMw7uv7K3Mi2A/Sephora.png',
          altText: '',
          description: null,
        },
      },
      {
        slug: 'southwest-airlines',
        title: 'Southwest Airlines',
        url: '/southwest-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095856/2lgMWo1ir9QvW4WRmD7H8B/SouthwestAirlinesLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095856/4d6c5JWccZMw7uv7K3Mi2A/SouthwestAirlinesLogo.png',
          altText: 'Southwest Gift Card',
          description: null,
        },
      },
      {
        slug: 'starbucks',
        title: 'Starbucks',
        url: '/starbucks-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095856/2lgMWo1ir9QvW4WRmD7H8B/StarbucksCardLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095856/4d6c5JWccZMw7uv7K3Mi2A/StarbucksCardLogo.png',
          altText: 'Starbucks Gift Card',
          description: null,
        },
      },
      {
        slug: 'stub-hub',
        title: 'StubHub',
        url: '/stubhub-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095857/2lgMWo1ir9QvW4WRmD7H8B/StubHubLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095857/4d6c5JWccZMw7uv7K3Mi2A/StubHubLogo.png',
          altText: 'StubHub Gift Card',
          description: null,
        },
      },
      {
        slug: 'target',
        title: 'Target',
        url: '/target-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095857/2lgMWo1ir9QvW4WRmD7H8B/TargetLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095857/4d6c5JWccZMw7uv7K3Mi2A/TargetLogo.png',
          altText: 'Target Gift Card',
          description: null,
        },
      },
      {
        slug: 'tjx',
        title: 'TJX',
        url: '/tj-maxx-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095858/2lgMWo1ir9QvW4WRmD7H8B/TJMaxxLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095858/4d6c5JWccZMw7uv7K3Mi2A/TJMaxxLogo.jpg',
          altText: 'TJ Maxx Gift Card',
          description: null,
        },
      },
      {
        slug: 'ulta',
        title: 'Ulta',
        url: '/ulta-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095859/2lgMWo1ir9QvW4WRmD7H8B/UltaBeautyLogo.png',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095859/4d6c5JWccZMw7uv7K3Mi2A/UltaBeautyLogo.png',
          altText: 'Ulta Gift Card',
          description: null,
        },
      },
      {
        slug: 'under-armour',
        title: 'Under Armour',
        url: '/under-armour-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095859/2lgMWo1ir9QvW4WRmD7H8B/UnderArmourLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095859/4d6c5JWccZMw7uv7K3Mi2A/UnderArmourLogo.jpg',
          altText: 'Under Armour Gift Card',
          description: null,
        },
      },
      {
        slug: 'zappos-com',
        title: 'Zappos.com',
        url: '/zappos-gift-card',
        image: {
          regular: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095900/2lgMWo1ir9QvW4WRmD7H8B/ZapposLogo.jpg',
          retina: 'https://static-acc.rapido.com/cms/sites/3/2019/03/28095900/4d6c5JWccZMw7uv7K3Mi2A/ZapposLogo.jpg',
          altText: 'Zappos Gift Card',
          description: null,
        },
      },
    ],
    icon: 'giftcards',
    slug: 'gift-cards',
  },
];

const legalLinks = [
  { title: 'Cookie Statement', url: 'cookies' },
  { title: 'Conditions', url: 'general-conditions' },
  { title: 'Privacy Policy', url: 'privacy' },
];

export default {
  footerLinks,
  serviceLinks,
  legalLinks,
  categoryLinks,
};
