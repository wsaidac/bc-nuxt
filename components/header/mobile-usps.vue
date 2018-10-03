<template>
  <div
    v-if="usps"
    class="main-carousel">
    <div
      v-for="(usp, i) in usps"
      :key="i"
      :class="['cell', `cell-${i}`]">
      <img :src="usp.image.sourceUrl" >
      <div v-text="usp.text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    usps: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    /* eslint-disable */
    const Flickity = require('flickity');
    this.instance = new Flickity(this.$el, {
      wrapAround: true,
      autoPlay: true,
      prevNextButtons: false,
      cellAlign: 'left',
    });
  },
  methods: {
    hideCarousel() {
    },
  },
};
</script>

<style lang="scss">
@import 'flickity/dist/flickity.css';
.main-carousel {
  background: #dce6f5;
  flex-grow: 1;
  padding: 5px 20px;
  .cell {
    width: 100%;
    @include flex(null, center);
    div {
      font-size: $font-size-base;
      font-weight: $font-weight-bold;
    }
  }
  img {
    height: 40px;
  }
  ol {
    bottom: 17px !important;
    margin-right: 5px;
    right: 0;
    width: 50px !important;
    li {
      height: 7px !important;
      margin: 0 4px !important;
      width: 7px !important;
    }
  }

  @include media-breakpoint-up('sm') {
    display: none;
  }
}
</style>
