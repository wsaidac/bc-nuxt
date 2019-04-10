<template>
  <div
    v-if="showCarousel"
    class="ui-carousel"
  >
    <transition-group
      name="scale"
      mode="in-out"
      tag="ul"
      class="ui-carousel__items list-unstyled"
    >
      <li
        v-for="usp in activeItem"
        :key="usp.text"
        v-touch:swipe="handleSwipe"
        class="ui-carousel__item"
      >
        <img
          v-if="usp.image"
          :alt="usp.text"
          :src="usp.image.regular"
          :srcset="`${usp.image.regular}, ${usp.image.retina} 2x`"
        >
        <strong v-text="usp.text" />
      </li>
    </transition-group>
    <ul class="ui-carousel__pag list-unstyled">
      <li
        v-for="(usp, index) in usps"
        :key="index"
        :class="{ 'ui-carousel__pag-bullet--active': index === activeIndex }"
        class="ui-carousel__pag-bullet"
        @click="activeIndex = index"
      />
    </ul>
    <div
      class="ui-carousel__hide-btn"
      @click="hideCarousel"
    >
      <ui-icon icon="close" />
    </div>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';

const autoTiming = 3000;

export default {
  name: 'UiCarousel',

  components: { UiIcon },

  props: {
    usps: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      showCarousel: true,
      activeIndex: 0,
      slideInterval: 0,
    };
  },

  computed: {
    activeItem() {
      return this.usps.filter((usp, index) => index === this.activeIndex);
    },
  },

  mounted() {
    if (this.$mq === 'sm') {
      this.startAutoSlide();
    }
  },

  methods: {
    hideCarousel() {
      this.showCarousel = false;
    },
    handleSwipe(direction) {
      this.stopAutoSlide();
      if (direction === 'left') {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.usps.length;
    },
    prevSlide() {
      const uspsLength = this.usps.length;
      this.activeIndex = (this.activeIndex + uspsLength - 1) % uspsLength;
    },
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        if (this.$mq === 'sm') {
          this.nextSlide();
        } else {
          this.stopAutoSlide();
        }
      }, autoTiming);
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
  },
};
</script>

<style lang="scss">
.ui-carousel {
  background-color: #dce6f5;
  flex-flow: row nowrap;
  height: 54px;
  padding: 5px 10px;

  @include flex(center, center);
}

.ui-carousel__items {
  flex-grow: 2;
  margin: 0;
  padding-left: 10px;

  img {
    margin-right: 5px;
    width: 50px;
  }

  @include media-breakpoint-down("xs") {
    padding-left: 0;
  }
}

.ui-carousel__item {
  @include flex(null, center);

  span {
    font-size: $font-size-base;
    font-weight: $font-weight-bold;
    padding-top: 5px;
  }

  &.scale-enter-active,
  &.scale-move,
  &.scale-leave-active {
    transition: all 0.7s cubic-bezier(0.55, 0, 0.1, 1);
  }

  &.scale-enter {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  &.scale-leave-active {
    opacity: 0;
    position: absolute;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  @include media-breakpoint-up("sm") {
    display: none;
  }

  @include media-breakpoint-down("xs") {
    font-size: $font-size-small;
  }
}

.ui-carousel__pag {
  padding-right: 5px;

  @include media-breakpoint-down("xs") {
    display: none;
  }
}

.ui-carousel__pag-bullet {
  background-color: #969696;
  border-radius: 100%;
  display: inline-block;
  height: 6px;
  margin: 0 3px;
  width: 6px;

  &--active {
    background-color: #000;
  }
}

.ui-carousel__hide-btn {
  color: #969696;
  font-weight: light;
}
</style>
