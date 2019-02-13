<template>
  <div class="shared-title container">
    <div class="flex">
      <h1 v-text="title" />
      <shared-instant-tooltip />
    </div>
  </div>
</template>

<script>
import SharedInstantTooltip from '~/components/shared/instant-tooltip';

export default {
  components: {
    SharedInstantTooltip,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.shared-title {
  height: 91px;
  padding-bottom: 20px;

  @include flex(null, flex-end);

  .flex {
    height: 20px;

    @include flex(null, center);

    h1 {
      font-size: 33.6px;
      margin-right: 20px;
    }
  }

  @include media-breakpoint-only('xs') {
    background: $gray-100;
    height: 41px;
    padding-bottom: 0;

    .flex h1 {
      font-size: $font-size-h5;
    }
  }
}
</style>
