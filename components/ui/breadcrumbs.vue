<template>
  <div class="ui-breadcrumbs container">
    <div
      v-for="(page, i) in pages"
      :key="i"
    >
      <ui-icon
        v-if="i === 0"
        icon="home"
      />
      <a
        v-if="page.url"
        :href="pages.url"
        :title="page.title"
      ><ui-icon
        v-if="i !== 0"
        icon="chevron-left-sharp" />{{ page.label }}</a>
      <span v-else>
        <ui-icon
          v-if="i !== 0"
          icon="chevron-left-sharp" />{{ page.label }}</span>
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
    pages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.ui-breadcrumbs {
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
