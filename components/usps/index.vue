<template>
  <div
    v-if="usps && usps.length > 0"
    :class="classes"
  >
    <div class="container">
      <ul class="cg-usps__list">
        <li
          v-for="(usp, index) in usps"
          :key="index"
          class="cg-usps__item"
        >
          <img
            v-if="usp.image"
            :alt="usp.text"
            :src="usp.image.regular"
            :srcset="`${usp.image.regular}, ${usp.image.retina} 2x`"
          >
          <div>
            <strong v-text="usp.text" />
            <small
              v-if="vertical"
              v-text="usp.description"
            />
          </div>
        </li>
      </ul>
    </div>

    <usps-carousel
      v-if="mobileCarousel"
      class="usps-carousel"
      :usps="usps"
    />
  </div>
</template>

<script>
import UspsCarousel from './carousel';

export default {
  name: 'CgUsps',

  components: {
    UspsCarousel,
  },

  props: {
    usps: {
      type: Array,
      default: null,
    },
    mode: {
      type: String,
      default: 'horizontal',
    },
    mobileCarousel: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes() {
      return [
        'cg-usps',
        `cg-usps--mode-${this.mode}`,
        { 'cg-usps--mobile-carousel': this.mobileCarousel },
      ];
    },

    vertical() {
      return this.mode === 'vertical';
    },
  },
};
</script>

<style lang="scss">
.cg-usps {
  background: $primary-100;
  padding: 10px 0;
  position: relative;

  @include media-breakpoint-down("md") {
    padding: 0;
  }

  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    height: 40px;
    width: (100% / 3);

    @include flex(center, center);

    & > img {
      width: 60px;
    }
  }

  &--mobile-carousel {
    .container {
      display: none;

      @include media-breakpoint-up("sm") {
        display: block;
      }
    }

    .usps-carousel {
      display: flex;

      @include media-breakpoint-up("sm") {
        display: none;
      }
    }
  }

  &--mode-vertical {
    .cg-usps__list {
      flex-direction: column;
    }

    .cg-usps__item {
      justify-content: flex-start;
      padding: 5px 0;

      @include size(auto);

      strong {
        display: block;
        font-size: $font-size-h6;
        line-height: 20px;
      }

      small {
        color: $body-color;
        font-size: $font-size-h6;
        line-height: 20px;
      }
    }
  }
}
</style>
