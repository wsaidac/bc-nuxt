<template>
  <a
    class="service-button"
    href="/faq"
  >
    <strong>Need some help?</strong>
    <span>Take a look at the FAQ's</span>
    <ui-icon
      icon="chevron-right"
    />
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
  background: $gray-600;
  display: block;
  padding: 10px;
}
</style>
