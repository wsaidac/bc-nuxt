<template>
  <a
    class="service-button"
    href="/faq"
  >
    <div class="spacer" />
    <div class="service-button__content">
      <strong>Need some help?</strong>
      <span>Take a look at the FAQ's</span>
    </div>
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
  color: $black;
  height: 63px;
  padding: 0 20px;

  @include flex(space-between, center);

  strong {
    font-size: 19.6px;
    margin-right: 20px;
  }

  .ui-icon {
    font-size: 16px;
    margin-right: 20px;
  }

  &:hover {
    background: $primary-base;
    color: $white;
    text-decoration: none;
  }

  @include media-breakpoint-down('md') {
    strong,
    span {
      font-size: 16.8px;
    }
  }

  @include media-breakpoint-down('xs') {
    height: 74px;

    .spacer {
      display: none;
    }

    &__content {
      flex-flow: column nowrap;

      @include flex();
    }

    strong {
      font-size: 18.48px;
    }

    span {
      font-size: 13.2px;
      margin-top: 4px;
    }
  }
}
</style>
