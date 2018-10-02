<template>
  <div class="footer-help">
    <a href="#">
      <img
        src="~/assets/images/images/customer-care-icon-new.jpg"
        alt="new question">
      <span class="footer-help__big-text">
        <span>Need more help?</span>
        <span>We're happy to help out</span>
      </span>
      <ui-icon icon="chevron-right" />
    </a>
    <div class="footer-help__small-text">
      <h2>Enjoy a continuous service with Rapido.com</h2>
      <p>Looking for online gift cards, a mobile recharge or a quick and easy way to
      enjoy your favorite entertainment? Rapido is an online store, with a broad selection
      of e-vouchers. Use Rapido to buy gift cards online and receive your unique code within
      30 seconds. That’s right — 30 seconds. At Rapido, we value rapid delivery but most importantly
      the safety of your purchase. Forget crowded lines in the supermarket and unreliable websites
      — get online and enjoy your e-voucher in 30 seconds.</p>
    </div>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';

export default {
  components: {
    UiIcon,
  },
};
</script>


<style lang="scss">
.footer-help {
  a {
    border: 1px solid $gray-400;
    color: $black;
    margin: 20px 0;
    padding: 10px 20px 10px 15px;
    text-decoration: none;

    @include flex(null, center);

    img {
      height: 130px;
    }

    .footer-help__big-text {
      font-size: 22.4px;
      flex-grow: 1;
      margin: 0 30px;

      @include flex();

      span {
        margin: 0 10px 0 0;

        &:first-child {
          font-weight: $font-weight-bold;
        }
      }
    }

    .ui-icon {
      font-size: 26px;
    }
  }

  &__small-text {
    margin: 20px 0 40px;

    h2 {
      font-weight: $font-weight-bold;
      font-size: $font-size-h5;
      margin: 0;
    }

    p {
      margin: 3px 0;
    }
  }

  @include media-breakpoint-down('md') {
    &__big-text {
      font-size: 19.2px;
    }

    &__small-text {
      p {
        font-size: $font-size-smaller;
      }
    }
  }

  @include media-breakpoint-down('xs') {
    a {
      .footer-help__big-text {
        flex-flow: column nowrap;
        margin: 0 15px;

        span:first-child {
          font-size: 16.8px
        }

        span:nth-child(2) {
          font-size: 12px;
        }
      }

      img {
        height: 80px;
      }
    }

    &__small-text {
      display: none;
    }
  }
}
</style>
