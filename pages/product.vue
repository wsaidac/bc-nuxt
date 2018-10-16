<template>
  <div class="cg-product">
    <header-banner
      :image-url="header.image.sourceUrl"
      payoff="https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png"
    />
    <cg-usps
      :usps="usps.items"
    />
    <h1 class="cg-product__title">
      <div class="flex container">
        {{ highlights.title }}
        <product-instant-tooltip message="Instant delivery" />
      </div>
    </h1>

    <div class="block block--gray">
      <div class="container">
        <ui-row>
          <ui-col :span="8">
            <product-card

            />
          </ui-col>
          <ui-col :span="16">
            <category-highlights
              :title="highlights.title"
              :description="highlights.description"
            />
          </ui-col>
        </ui-row>
      </div>
    </div>

    <div class="container">
      <ui-row>
        <ui-col :sm="12">
          <category-accordion
            :usps="usps.items"
            :slides="infoSlides"
          />
        </ui-col>
        <ui-col :sm="12">
          <seo-block
            :title="seoBlock.title"
            :description="seoBlock.description"
          />
        </ui-col>
      </ui-row>
      <service-button />
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
import CategoryAccordion from '~/components/category/accordion';
import CategoryHighlights from '~/components/category/highlights';
import ServiceButton from '~/components/service/button';
import ServiceBanner from '~/components/service/banner';
import SeoBlock from '~/components/seo/block';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';
import { UiCol, UiRow } from '~/components/ui';
import ProductInstantTooltip from '~/components/product/instant-tooltip';
import ProductCard from '~/components/product/card';

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
  <h5>What am i buying?</h5>
  <p>These EasyGO Refills allow you to recharge/refill the amount of credits on your EasyGO mobile account.</p>
  `,
};

const seoBlock = {
  title: 'Easy Refill EasyGO',
  description: 'On Rapido.com you can easily buy an easyGO refill voucher. Receive your EasyGO recharge code within 30 seconds! All you need to do is select one of the easyGO mobile plans, submit your email address, choose one of our secure payment options and proceed to the checkout. We’ll send you the easyGO recharge voucher by email.',
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
    HeaderBanner,
    CgUsps,
    CategoryAccordion,
    CategoryHighlights,
    ServiceButton,
    ServiceBanner,
    SeoBlock,
    SeoBreadcrumbs,
    UiCol,
    UiRow,
    ProductInstantTooltip,
    ProductCard,
  },

  data() {
    return {
      header,
      usps,
      infoSlides,
      highlights,
      customerService,
      seoBlock,
      crumbs,
    };
  },
};
</script>

<style lang="scss">
</style>
