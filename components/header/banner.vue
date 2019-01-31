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
        :alt="imageDescription"
        :src="image.desktop"
        class="header-banner__image"
      >
    </picture>
    <div class="container">
      <section
        v-if="payoffText"
        class="header-banner__payoff-text"
      >
        <div
          class="header-banner__payoff-text-content"
          v-html="payoffText"
        />
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

  // start white block
  &__payoff-text {
    background: $white;
    text-align: center;
    transform: translateY(-50%) skewY(-10deg);

    @include size(27%, 60%);
    @include flex(center, center);
    @include position(absolute, 50% 18% null null);

    @include media-breakpoint-down("md") {
      right: 14%;
    }

    @include media-breakpoint-down("sm") {
      right: 10%;
    }

    @include media-breakpoint-down("xs") {
      @include size(40%, 60%);
    }
  }

  &__payoff-text-content {
    font-size: 1.9vw;
    line-height: 1.3em;
    transform: skewY(10deg);

    @include media-breakpoint-down("xs") {
      font-size: 2.8vw;
    }

    strong {
      font-size: 3vw;

      @include media-breakpoint-down("xs") {
        font-size: 4.7vw;
      }
    }
  }
  // end white block
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
