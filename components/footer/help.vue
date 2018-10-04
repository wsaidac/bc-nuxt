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
      flex-grow: 1;
      font-size: 22.4px;
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

    &:hover {
      border: 1px solid $primary-500;
    }
  }

  @include media-breakpoint-down('md') {
    &__big-text {
      font-size: 19.2px;
    }
  }

  @include media-breakpoint-down('xs') {
    a {
      .footer-help__big-text {
        flex-flow: column nowrap;
        margin: 0 15px;

        span:first-child {
          font-size: 16.8px;
        }

        span:nth-child(2) {
          font-size: 12px;
        }
      }

      img {
        height: 80px;
      }
    }
  }
}
</style>
