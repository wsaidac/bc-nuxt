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
        v-if="header && (header.titlePart1 || header.titlePart2)"
        class="header-banner__payoff-text"
      >
        <div class="header-banner__payoff-text-content">
          <p v-text="header.titlePart1" />
          <p v-text="header.titlePart2" />
        </div>
      </section>
      <section
        v-else-if="header"
        class="header-banner__payoff-image"
      >
        <div class="header-banner__payoff-image-inner">
          <figure v-if="header.image">
            <img
              :alt="header.image.altText"
              :src="header.image.regular"
              :srcset="`${header.image.regular}, ${header.image.retina} 2x`"
            >
          </figure>
        </div>
      </section>
      <span
        class="header-banner__title"
        v-text="title"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBanner",

  props: {
    post: {
      type: Object,
      default: () => { },
    },
    image: {
      type: Object,
      default: () => { },
    },
    header: {
      type: Object,
      default: () => { },
    },
    title: {
      type: String,
      default: "",
    },
  },

  computed: {
    headerImage() {
      return this.header && (this.header.titlePart1 || this.header.titlePart2);
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
    background: $white;
    text-align: center;
    transform: translateY(-50%) skewY(-10deg);

    @include size(27%, 56%);
    @include flex(center, center);
    @include position(absolute, 50% 18% null null);

    @include media-breakpoint-down("md") {
      right: 14%;
    }

    @include media-breakpoint-down("sm") {
      right: 10%;
    }

    @include media-breakpoint-down("xs") {
      right: 7%;

      @include size(40%, 56%);
    }
  }

  &__payoff-text-content {
    font-size: 1.9vw;
    line-height: 1.3em;
    transform: skewY(10deg);

    @include media-breakpoint-down("xs") {
      font-size: 2.8vw;
    }

    p {
      margin: 3px 0;
    }

    p:nth-child(2) {
      font-size: 3vw;
      font-weight: $font-weight-bold;

      @include media-breakpoint-down("xs") {
        font-size: 4.7vw;
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
