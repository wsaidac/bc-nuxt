<template>
  <div class="cg-category">
    <header-banner
      :image-url="header.image.sourceUrl"
      payoff-image="https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png"
      title="EasyGO Refill"
    />
    <cg-usps
      :usps="usps.items"
      mobile-carousel
    />
    <div>
      <category-kind
        v-for="kind in kinds"
        :key="kind.id"
        :title="kind.title"
        :products="kind.products"
      />
    </div>
    <div class="cg-category__info-block container">
      <ui-row padded>
        <ui-col :sm="12">
          <category-accordion
            :usps="usps.items"
            :slides="infoSlides"
          />
        </ui-col>
        <ui-col :sm="12">
          <div class="block block--yellow block--padded">
            <category-highlights
              :title="highlights.title"
              :description="highlights.description"
            />
          </div>
          <div class="block block--blue block--padded">
            <seo-block
              :title="seoBlock.title"
              :description="seoBlock.description"
            />
          </div>
        </ui-col>
      </ui-row>
    </div>

    <div class="container container--mobile-padded">
      <service-button />
      <service-terms :service-terms="serviceTerms" />
      <service-banner
        :link="customerService.link"
        :image="customerService.image"
        :title="customerService.primaryText"
        :description="customerService.secondaryText"
      />
      <seo-breadcrumbs
        :crumbs="crumbs"
      />
    </div>
  </div>
</template>

<script>
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import CategoryKind from '~/components/category/kind';
import CategoryAccordion from '~/components/category/accordion';
import CategoryHighlights from '~/components/category/highlights';
import ServiceButton from '~/components/service/button';
import ServiceBanner from '~/components/service/banner';
import ServiceTerms from '~/components/service/terms';
import SeoBlock from '~/components/seo/block';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';
import { UiCol, UiRow } from '~/components/ui';

const header = {
  image: {
    sourceUrl: 'http://localhost:3000/app/uploads/seeds/rapido_header.jpg',
  },
};

const usps = {
  items: [
    {
      text: 'Order in Minutes',
      description: 'Simply choose the product and amount you need',
      image: {
        sourceUrl: 'http://localhost:3000/app/uploads/seeds/usp-icon-fast.png',
      },
    },
    {
      text: 'Pay safely & securely',
      description: 'Safe payment options, like Visa and PayPal',
      image: {
        sourceUrl: 'http://localhost:3000/app/uploads/seeds/usp-icon-fast.png',
      },
    },
    {
      text: 'Get your code instantly',
      description: 'Receive the email with your code instantly',
      image: {
        sourceUrl: 'http://localhost:3000/app/uploads/seeds/usp-icon-fast.png',
      },
    },
  ],
};

const kinds = [
  {
    id: 1,
    title: 'EasyGO Refill',
    products: [
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
    ],
  },
  {
    id: 2,
    title: 'EasyGO Refill',
    products: [
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
        id: 3,
        price: {
          amount: 6,
          currency: 'USD',
        },
        title: 'Verizon Prepaid Refill $20',
        imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
      },
      {
        id: 4,
        price: {
          amount: 7,
          currency: 'USD',
        },
        title: 'Verizon Prepaid Refill $20',
        imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
      },
      {
        id: 5,
        price: {
          amount: 7,
          currency: 'USD',
        },
        title: 'Verizon Prepaid Refill $20',
        imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
      },
    ],
  },
];

const infoSlides = [
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
];

const highlights = {
  title: 'EasyGO Refill',
  description: `
  <h3>What am i buying?</h3>
  <p>These EasyGO Refills allow you to recharge/refill the amount of credits on your EasyGO mobile account.</p>
  <h3>What do I do here?</h3>
  <p>On this page, you can choose the amount you want to refill your mobile device with, to call/text or use data.</p>
  <h3>After I buy</h3>
  <p>After you have selected the amount and placed an order, you will receive a code along with clear instructions (also by email) on how to refill your AT&T mobile device/account.</p>
  <h3>For who is it?</h3>
  <p>Most people who use these products are prepaid/pay as you go users. They (usually) don't have a monthly subscription with EasyGo or any other provider.</p>
  `,
};

const seoBlock = {
  title: 'Easy Refill EasyGO',
  description: 'On Rapido.com you can easily buy an easyGO refill voucher. Receive your EasyGO recharge code within 30 seconds! All you need to do is select one of the easyGO mobile plans, submit your email address, choose one of our secure payment options and proceed to the checkout. We’ll send you the easyGO recharge voucher by email.',
};

const serviceTerms = {
  title: 'Terms & Conditions',
  description: 'By using this service, you consent to the Terms of Service available at www.easygowireless.com. Unlimited does not mean unreasonable use. EasyGO reserves the right to reduce data speeds and/or terminate your service for unauthorized or abnormal usage. Video streaming or other high-bandwidth applications may be available on Wi-Fi only. Many jurisdictions impose recurring taxes and fees that may be debited from your account. No refunds or exchanges. If you change plans prior to your airtime expiration date, you may lose any remaining value on your account.<br><br>Required state and local taxes or surcharges may apply to this purchase.<br><br>This PIN is Non-Refundable.',
};

const crumbs = [
  { url: '/', label: 'Home', title: 'Rapido Home is cool' },
  { url: '/category', label: 'category', title: 'cat' },
  { url: '/faq', label: 'FAQ', title: 'faq' },
  { url: '/category', label: 'category', title: 'cat' },
  { label: 'prod', title: 'prod' },
];

const customerService = {
  primaryText: 'Need more help?',
  secondaryText: "We're happy to help out",
  link: { url: '/us/faq/', title: 'faq', target: '' },
  image: { sourceUrl: 'http://localhost:3000/app/uploads/seeds/customer-care.jpg' },
};

export default {
  components: {
    CategoryAccordion,
    CategoryHighlights,
    CategoryKind,
    CgUsps,
    HeaderBanner,
    SeoBlock,
    SeoBreadcrumbs,
    ServiceBanner,
    ServiceButton,
    ServiceTerms,
    UiCol,
    UiRow,
  },

  data() {
    return {
      header,
      usps,
      kinds,
      infoSlides,
      highlights,
      customerService,
      seoBlock,
      crumbs,
      serviceTerms,
    };
  },
};
</script>

<style lang="scss">
.cg-category {
  .block--yellow {
    margin-bottom: 30px;
  }

  @include media-breakpoint-only('xs') {
    &__breadcrumbs {
      display: none !important;
    }

    .product-card--mode-vertical {
      margin-top: 0;
      max-width: none;

      @include flex();

      .product-card__image {
        border: 1px solid $gray-400;
        margin: 10px;
        max-width: 200px;
        padding: 10px;
      }

      .product-card__content {
        flex-grow: 1;
        padding-left: 0;
      }

      .el-button {
        @include position(relative, 3px 0 0 0);
      }
    }

    .el-row.is-padded {
      margin-top: 0;
    }
  }
}
</style>
