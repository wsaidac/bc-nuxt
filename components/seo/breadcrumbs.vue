<template>
  <div class="seo-breadcrumbs">
    <div
      v-for="(crumb, i) in crumbs"
      :key="i"
    >
      <ui-icon
        v-if="i === 0"
        icon="home"
      />
      <a
        v-if="crumb.url"
        :href="crumb.url"
        :title="crumb.title"
      ><ui-icon
        v-if="i !== 0"
        icon="chevron-left-sharp" />{{ crumb.label }}</a>
      <span v-else>
        <ui-icon
          v-if="i !== 0"
          icon="chevron-left-sharp" />{{ crumb.label }}</span>
    </div>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';

export default {
  components: {
    UiIcon,
  },

  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.seo-breadcrumbs {
  font-size: 12px;

  @include flex();

  .ui-icon-home {
    color: $primary-500;
    font-size: 24px;

    @include position(relative, -2px null null null);
  }

  a {
    text-decoration: underline;
  }

  .ui-icon-chevron-left-sharp {
    color: $gray-900;
    font-size: 10px;
    padding-right: 2px;
  }
}
</style>
