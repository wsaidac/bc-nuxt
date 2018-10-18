<template>
  <div class="header-banner">
    <img
      :alt="imageDescription"
      :src="imageUrl"
      class="header-banner__image"
    >
    <div class="container">
      <section
        v-if="payoff"
        class="header-banner__payoff"
      >
        <div class="header-banner__payoff-ribbon">
          <div
            v-if="(/\.(gif|jpg|jpeg|tiff|png)$/i).test(payoff)"
          >
            <img :src="payoff">
          </div>
          <div
            v-else
            class="header-banner__payoff-content"
            v-html="payoff"
          />
        </div>
      </section>
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
    imageUrl: {
      type: String,
      required: true,
    },
    payoff: {
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

  &__payoff {
    text-align: center;
    transform: translateY(-50%);

    @include position(absolute, 50% 18% null null);
  }

  &__payoff-ribbon {
    background: $white;
    padding: 10px 0;
    padding: 3vw 0;
    transform: skewY(-10deg);

    @include media-breakpoint-up('sm') {
      padding: 20px 0;
      padding: 1.8vw 0;
    }

    @include media-breakpoint-up('lg') {
      padding: 30px 0;
      padding: 1.8vw 0;
    }
  }

  &__payoff-content {
    line-height: 1.2;
    padding: 10px;
    transform: skewY(10deg);

    p {
      margin: 0;

      strong {
        font-size: 1.6em;
      }
    }

    @include media-breakpoint-up('lg') {
      font-size: 2.5em;
      font-size: 1.8vw;
      padding: 30px;
      padding: 1.8vw;
    }
  }
}
</style>
