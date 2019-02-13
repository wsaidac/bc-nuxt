<template>
  <a
    :href="customerService.link.url"
    :title="customerService.link.title"
    class="service-banner"
  >
    <img
      v-if="image"
      :src="image.regular"
      :srcset="`${image.regular}, ${image.retina} 2x`"
      :alt="image.altText"
      :longdesc="image.description"
    >
    <p>
      <strong v-text="customerService.primaryText" />
      <span v-text="customerService.secondaryText" />
    </p>
    <ui-icon icon="chevron-right" />
  </a>
</template>

<script>
import { UiIcon } from '~/components/ui';

export default {
  name: 'ServiceBanner',

  components: {
    UiIcon,
  },
  props: {
    customerService: { // image, primaryText, secondaryText, link
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    image() {
      return this.customerService.image;
    },
  },
};
</script>

<style lang="scss">
.service-banner {
  border: 1px solid $gray-400;
  color: $black;
  margin: 20px 0;
  padding: 10px;
  text-decoration: none;

  @include flex(null, center);

  @include media-breakpoint-up("md") {
    padding: 10px 20px;
  }

  &:hover {
    border-color: $primary-base;
    color: inherit;
    text-decoration: none;
  }

  img {
    height: 80px;
    margin-right: 10px;

    @include media-breakpoint-up("md") {
      height: 130px;
      margin-right: 20px;
    }
  }

  p {
    flex: 1;
    font-size: $font-size-h4;
    margin: 0 20px 0 0;

    strong {
      margin-right: 10px;
    }

    @include media-breakpoint-down("md") {
      font-size: $font-size-h5;
    }

    @include media-breakpoint-down("xs") {
      font-size: $font-size-smaller;
      margin-right: 10px;

      strong {
        display: block;
        font-size: $font-size-h6;
      }
    }
  }

  .ui-icon {
    font-size: 26px;
  }
}
</style>
