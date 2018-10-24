<template>
  <div class="cg-category">
    <header-banner
      :image="post.categoryHeader.image"
      :payoff-image="post.categoryHeader.image"
      :title="post.categoryHeader.title"
    />
    <cg-usps
      :usps="usps.items"
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
import { mapGetters } from 'vuex';
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import CategoryKind from '~/components/category/kind';
import CategoryAccordion from '~/components/category/accordion';
import CategoryHighlights from '~/components/category/highlights';
import ServiceButton from '~/components/service/button';
import ServiceBanner from '~/components/service/banner';
import SeoBlock from '~/components/seo/block';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';
import { UiCol, UiRow } from '~/components/ui';

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
      {
        id: 6,
        price: {
          amount: 7,
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
        id: 5,
        price: {
          amount: 6,
          currency: 'USD',
        },
        title: 'Verizon Prepaid Refill $20',
        imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
      },
      {
        id: 6,
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

const crumbs = [
  { url: '/', label: 'Home', title: 'Rapido Home is cool' },
  { url: '/category', label: 'category', title: 'cat' },
  { url: '/faq', label: 'FAQ', title: 'faq' },
  { url: '/category', label: 'category', title: 'cat' },
  { label: 'prod', title: 'prod' },
];

export default {
  components: {
    HeaderBanner,
    CgUsps,
    CategoryKind,
    CategoryAccordion,
    CategoryHighlights,
    ServiceButton,
    ServiceBanner,
    SeoBlock,
    SeoBreadcrumbs,
    UiCol,
    UiRow,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      kinds,
      infoSlides,
      highlights,
      seoBlock,
      crumbs,
    };
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps', 'paymentMethods']),
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

      @include flex();

      .product-card__content {
        flex-grow: 1;
        padding-left: 0;
      }

      figure {
        border: 1px solid $gray-400;
        height: auto;
        margin: 10px;
        width: 25%;

        @include flex(center, center);

        img {
          padding: 10px;
        }
      }

      .el-button {
        @include position(relative, 3px 0 0 0);
      }
    }
  }
}
</style>
