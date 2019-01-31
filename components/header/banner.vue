<template>
  <div class="header-banner">
    <picture v-if="image">
      <source
        :srcset="image.desktop"
        media="(min-width: 768px)"
      >
      <source
        :srcset="image.mobile"
        media="(max-width: 767px)"
      >
      <img
        :alt="image.altText"
        :longdesc="image.description"
        :src="image.desktop"
        class="header-banner__image"
      >
    </picture>
    <div class="container">
      <section
        v-if="payoffText"
        class="header-banner__payoff-text"
      >
        <div class="header-banner__payoff-text-inner">
          <div
            class="header-banner__payoff-text-content"
            v-html="payoffText"
          />
        </div>
      </section>
      <section
        v-if="payoffImage"
        class="header-banner__payoff-image"
      >
        <div class="header-banner__payoff-image-inner">
          <figure>
            <img
              :alt="title"
              :src="payoffImage.regular"
              :srcset="`${payoffImage.regular}, ${payoffImage.retina} 2x`"
            >
          </figure>
        </div>
      </section>
      <span
        v-if="title"
        class="header-banner__title"
        v-text="title"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',

  props: {
    imageDescription: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      required: true,
    },
    payoffText: {
      type: String,
      default: null,
    },
    payoffImage: {
      type: Object,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.header-banner {
  position: relative;

  &__image {
    display: block;
    width: 100%;
  }

  &__payoff-text {
    text-align: center;
    transform: translateY(-50%);

    @include position(absolute, 50% 18% null null);
  }

  &__payoff-text-inner {
    background: $white;
    padding: 10px 0;
    padding: 3vw 0;
    transform: skewY(-10deg);

    @include media-breakpoint-up("sm") {
      padding: 20px 0;
      padding: 1.8vw 0;
    }

    @include media-breakpoint-up("lg") {
      padding: 30px 0;
      padding: 1.8vw 0;
    }
  }

  &__payoff-text-content {
    line-height: 1.2;
    padding: 10px;
    transform: skewY(10deg);

    p {
      margin: 0;

      strong {
        font-size: 1.6em;
      }
    }

    @include media-breakpoint-up("lg") {
      font-size: 2.5em;
      font-size: 1.8vw;
      padding: 30px;
      padding: 1.8vw;
    }
  }

  &__payoff-image {
    overflow: hidden;
    padding-bottom: 13%;

    @include position(absolute, 0 10% null null);
  }

  &__payoff-image-inner {
    background: $white;
    max-width: 335px;
    padding-bottom: 13%;
    transform: skewY(-10deg);
    width: 27vw;

    @include media-breakpoint-up("sm") {
      width: 18vw;
    }

    figure {
      background: $white;
      margin: 0;
      transform: skewY(10deg);

      img {
        display: block;
        margin: 0 auto;
        padding: 15px 15px 0;

        @include media-breakpoint-up("sm") {
          max-width: 15vw;
          width: 100%;
        }
      }
    }
  }

  &__title {
    color: $white;
    font-size: $font-size-h4;
    font-weight: $font-weight-bold;

    @include position(absolute, null null 10px 10px);

    @include media-breakpoint-up("sm") {
      display: none;
    }
  }
}
</style>
