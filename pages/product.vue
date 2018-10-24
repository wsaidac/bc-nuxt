<template>
  <div class="cg-product">
    <header-banner
      :image="header.image"
      :payoff-image="header.payoffImage"
    />
    <cg-usps
      :usps="usps.items"
      mobile-carousel
    />

    <service-title
      :title="highlights.title"
      tooltip-message="Instant delivery"
    />

    <div class="block block--gray">
      <div class="container container--mobile-padded">
        <ui-row>
          <ui-col
            :lg="6"
            :md="8"
            :sm="12"
            :xs="24"
          >
            <product-card
              :product="product"
              has-select
            />
          </ui-col>
          <ui-col
            :lg="18"
            :md="16"
            :sm="12"
            :xs="24"
          >
            <category-highlights
              :title="highlights.title"
              :description="highlights.description"
            />
            <product-variants
              :product="product"
              :variants="relatedProducts"
            />
          </ui-col>
        </ui-row>
      </div>
    </div>

    <div class="container">
      <ui-row padded>
        <ui-col :sm="12">
          <category-accordion
            :usps="usps.items"
            :slides="infoSlides"
          />
        </ui-col>
        <ui-col :sm="12">
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
import { mapGetters } from 'vuex';
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import CategoryAccordion from '~/components/category/accordion';
import CategoryHighlights from '~/components/category/highlights';
import ServiceButton from '~/components/service/button';
import ServiceBanner from '~/components/service/banner';
import ServiceTerms from '~/components/service/terms';
import SeoBlock from '~/components/seo/block';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';
import { UiCol, UiRow } from '~/components/ui';
import ProductInstantTooltip from '~/components/product/instant-tooltip';
import ProductCard from '~/components/product/card';
import ServiceTitle from '~/components/service/title';
import ProductVariants from '~/components/product/variants';

const header = {
  image: {
    desktop: 'http://localhost:3000/app/uploads/seeds/rapido_header.jpg',
    mobile: 'http://localhost:3000/app/uploads/seeds/rapido_header.jpg',
  },
  payoffImage: {
    regular: 'http://localhost:3000/app/uploads/seeds/rapido_header.jpg',
    retina: 'http://localhost:3000/app/uploads/seeds/rapido_header.jpg',
  },
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
  <h5>What am i buying?</h5>
  <p>These EasyGO Refills allow you to recharge/refill the amount of credits on your EasyGO mobile account.</p>
  <h5>What am i buying?</h5>
  <p>These EasyGO Refills allow you to recharge/refill the amount of credits on your EasyGO mobile account.</p>
  <h5>What am i buying?</h5>
  <p>These EasyGO Refills allow you to recharge/refill the amount of credits on your EasyGO mobile account.</p>
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

const product = {
  id: 1,
  title: 'Verizon Prepaid Refill $5',
  price: {
    amount: 5.0,
    currency: 'USD',
  },
  url: '/verizon',
  imageUrl:
    'https://static.rapido.com/categories/2023/Zeichenflche_98.png?1532587359',
};

const relatedProducts = [
  { id: 2, title: 'Verizon Prepaid Refill $10', url: '/verizon/10-usd' },
  { id: 3, title: 'Verizon Prepaid Refill $15', url: '/verizon/15-usd' },
  { id: 4, title: 'Verizon Prepaid Refill $20', url: '/verizon/20-usd' },
];

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
    ServiceTitle,
    ProductVariants,
    ServiceTerms,
  },

  data() {
    return {
      header,
      infoSlides,
      highlights,
      seoBlock,
      crumbs,
      product,
      relatedProducts,
      serviceTerms,
    };
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps', 'paymentMethods']),
  },
};
</script>

<style lang="scss">
.cg-product {
  @include media-breakpoint-only('xs') {
    .product-card {
      margin: auto !important;
    }
  }
}
</style>
