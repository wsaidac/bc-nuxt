<template>
  <div :class="classes">
    <div class="container">
      <ul class="cg-usps__list">
        <li
          v-for="(usp, index) in usps"
          :key="index"
          class="cg-usps__item"
        >
          <img
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
      default: false,
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

  @include media-breakpoint-up('sm') {
    padding: 15px 0;
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

  .usps-carousel {
    display: none;
  }

  &--mobile-carousel {
    .container {
      display: none;

      @include media-breakpoint-up('sm') {
        display: block;
      }
    }

    .usps-carousel {
      display: block;

      @include media-breakpoint-up('sm') {
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
      padding: 15px;

      @include size(auto);

      strong {
        display: block;
      }

      small {
        color: $body-color;
        font-size: $font-size-base;
      }
    }
  }
}
</style>
