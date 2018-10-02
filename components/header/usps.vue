<template>
  <div
    v-if="usps"
    class="header-usps"
  >
    <div class="container">
      <ul class="header-usps__list">
        <li
          v-for="(usp, index) in usps"
          :key="index"
          class="header-usps__item"
        >
          <div
            :style="{ background: `url(${usp.image.sourceUrl}) no-repeat 0 50%/60px`, padding: '60px' }"
          >
            <span
              class="header-usps__label"
              v-text="usp.text" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderUsps',

  props: {
    usps: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.header-usps {
  background: $primary-100;
  padding: 10px 0;
  position: relative;

  @include media-breakpoint-up("sm") {
    padding: 15px 0;
  }

  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
    width: (100% / 3);
  }

  &__label {
    font-weight: $font-weight-bold;
  }

  @include media-breakpoint-only('xs') {
    display: none;
  }
}
</style>
