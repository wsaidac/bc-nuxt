<template>
  <div class="footer-help">
    <a :href="customerService.bannerLink.url">
      <img
        :src="customerService.bannerImage.sourceUrl"
        alt="new question">
      <span class="footer-help__big-text">
        <span v-text="customerService.primaryBannerText"/>
        <span v-text="customerService.secondaryBannerText"/>
      </span>
      <ui-icon icon="chevron-right" />
    </a>
    <div class="footer-help__small-text">
      <h2 v-text="customerService.closingTitle"/>
      <p v-text="customerService.closingText"/>
    </div>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';
import { mapGetters } from 'vuex';

export default {
  name: 'FooterHelp',

  components: {
    UiIcon,
  },

  computed: {
    ...mapGetters('shared', ['customerService']),
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

    &:hover {
      border-color: $primary-base;
      color: inherit;
      text-decoration: none;
    }

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
  }

  &__small-text {
    margin: 20px 0 40px;

    h2 {
      font-size: $font-size-h5;
      font-weight: $font-weight-bold;
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

    &__small-text {
      display: none;
    }
  }
}
</style>
