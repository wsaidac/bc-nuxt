<template>
  <a
    class="service-button"
    href="/faq"
  >
    <strong>Need some help?</strong>
    <span>Take a look at the FAQ's</span>
    <ui-icon icon="chevron-right" />
  </a>
</template>

<script>
import UiIcon from '~/components/ui/icon';

export default {
  name: 'ServiceButton',

  components: {
    UiIcon,
  },
};
</script>

<style lang="scss">
.service-button {
  background: $gray-100;
  color: $body-color;
  display: block;
  font-size: $font-size-h4;
  padding: 20px;
  text-align: center;
  position: relative;

  @include media-breakpoint-down('md') {
    font-size: $font-size-h6;
  }

  strong {
    margin-right: 20px;
  }

  .ui-icon {
    font-size: 16px;
    margin-top: -8px;

    @include position(absolute, 50% 40px null null);
  }

  &:hover {
    background: $primary-base;
    color: $white;
    text-decoration: none;
  }

  @include media-breakpoint-only('xs') {
    font-size: $font-size-small;
    text-align: left;

    strong {
      display: block;
      font-size: $font-size-h5;
    }

    .ui-icon {
      right: 10px;
    }
  }
}
</style>
