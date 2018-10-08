<template>
  <div
    v-if="usps"
    :class="classes"
  >
    <div class="container">
      <ul class="header-usps__list">
        <li
          v-for="(usp, index) in usps"
          :key="index"
          class="header-usps__item"
        >
          <div
            :style="{ background: `url(${usp.image.sourceUrl}) no-repeat 0 50%/60px` }"
            class="header-usps__labels"
          >
            <span
              class="header-usps__label"
              v-text="usp.text" />
            <span
              v-if="vertical"
              class="header-usps__label extra"
              v-text="'Simply choose the product and amount you need'" />
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
    vertical: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        'header-usps',
        { 'header-usps--vertical': this.vertical },
      ];
    },
  },
};
</script>

<style lang="scss">
.header-usps {
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
  }

  &__labels {
    padding: 10px 60px;
  }

  &__label {
    font-weight: $font-weight-bold;
  }

  &--vertical {
    border-top: 1px solid $gray-400;

    .header-usps {
      &__list {
        flex-flow: column nowrap;
      }

      &__item {
        justify-content: flex-start;

        @include size(100%, 80px);
      }

      &__labels {
        padding: 0 0 0 60px !important;
      }

      &__label {
        display: block;
        font-size: 0.916em;

        &.extra {
          font-weight: $font-weight-regular;
        }
      }
    }
  }

  @include media-breakpoint-only('xs') {
    display: none;

    &--vertical {
      display: block;
    }
  }
}
</style>
