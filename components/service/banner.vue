<template>
  <a
    :href="link.url"
    :title="link.title"
    class="service-banner"
  >
    <img
      :src="image.regular"
      :srcset="`${image.regular}, ${image.retina} 2x`"
      alt=""
    >
    <p>
      <strong v-text="title" />
      <span v-text="description" />
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
    link: {
      type: Object,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
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

  @include media-breakpoint-up('md') {
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

    @include media-breakpoint-up('md') {
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

    @include media-breakpoint-down('md') {
      font-size: $font-size-h5;
    }

    @include media-breakpoint-down('xs') {
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
