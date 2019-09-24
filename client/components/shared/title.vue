<template>
  <div class="shared-title container">
    <div class="flex">
      <h2 v-html="title" />
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
  @include flex(null, flex-end);

  .flex {
    @include flex(null, center);

    h2 {
      font-size: 33.6px;
      margin-right: 20px;
    }
  }

  @include media-breakpoint-only("xs") {
    background: $gray-100;
    padding-bottom: 0;

    .flex h2 {
      font-size: $font-size-h5;
    }
  }
}
</style>
