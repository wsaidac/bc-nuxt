<template>
  <div class="seo-breadcrumbs">
    <ui-icon icon="home" />
    <ul>
      <li
        v-for="(crumb, i) in crumbs"
        :key="i"
      >
        <span v-if="crumb.url">
          <nuxt-link
            :to="$contextPath(crumb.url)"
            :title="crumb.title"
            v-html="crumb.label"
          />
        </span>
        <span
          v-else
          v-html="crumb.label"
        />
      </li>
    </ul>
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
  align-items: center;
  display: flex;
  margin: 30px 0;

  .ui-icon {
    color: $primary-500;
    font-size: 24px;
    margin-right: 5px;
  }

  ul {
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      padding: 0 2px;

      & + li::before {
        color: $gray-700;
        content: "<";
        margin-right: 5px;
      }

      a {
        text-decoration: underline;
      }
    }
  }
}
</style>
