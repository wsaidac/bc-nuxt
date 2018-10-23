<template>
  <div class="usps-carousel">
    <div
      v-for="(usp, index) in usps"
      :key="index"
      class="usps-carousel__cell"
    >
      <img
        :alt="usp.text"
        :src="usp.image.regular"
        :srcset="`${usp.image.regular}, ${usp.image.retina} 2x`"
      >
      <strong v-text="usp.text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UspsCarousel',

  props: {
    usps: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    const Flickity = require('flickity'); // eslint-disable-line
    this.instance = new Flickity(this.$el, {
      wrapAround: true,
      autoPlay: true,
      prevNextButtons: false,
      cellAlign: 'left',
      selectedAttraction: 0.016,
      friction: 0.28,
    });
  },
};
</script>

<style lang="scss">
@import 'flickity/dist/flickity.css';

.usps-carousel {
  flex-grow: 1;
  padding: 5px 20px;

  &__cell {
    width: 100%;

    @include flex(null, center);

    img {
      height: 40px;
    }

    div {
      font-size: $font-size-base;
      font-weight: $font-weight-bold;
    }
  }

  .flickity-page-dots {
    bottom: 17px;
    margin-right: 5px;
    right: 0;
    width: 50px;

    .dot {
      height: 7px;
      margin: 0 4px;
      width: 7px;
    }
  }
}
</style>
