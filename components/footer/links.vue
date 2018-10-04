<template>
  <div class="footer-links container">
    <div
      v-for="(column, i) in columns"
      :key="column.title"
      :class="['footer-links__category', { 'footer-links__category--active': isExpanded(i) }]"
    >
      <h5 @click="toggle(i)">
        <span v-text="column.title" />
        <ui-icon icon="chevron-down" />
      </h5>
      <ul class="list-unstyled list-sm-up">
        <li
          v-for="link in column.links"
          :key="link.title"
        >
          <nuxt-link
            :to="link.url"
            :title="link.title"
          >
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
      <ui-transition-expand >
        <ul
          v-if="isExpanded(i)"
          class="list-unstyled list-xs">
          <li
            v-for="link in column.links"
            :key="link.title"
          >
            <nuxt-link
              :to="link.url"
              :title="link.title"
            >
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </ui-transition-expand>
    </div>
  </div>
</template>

<script>
import { UiTransitionExpand, UiIcon } from '~/components/ui';


export default {
  name: 'FooterLinks',

  components: {
    UiTransitionExpand,
    UiIcon,
  },

  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      expanded: [],
    };
  },

  methods: {
    toggle(i) {
      const index = this.expanded.indexOf(i);
      return index >= 0 ? this.expanded.splice(index, 1) : this.expanded.push(i);
    },

    isExpanded(i) {
      return this.expanded.includes(i);
    },
  },
};
</script>

<style lang="scss">
.footer-links {
  align-items: flex-start;
  display: flex;

  .ui-icon {
    display: none;
  }

  .list-xs {
    display: none;
  }

  @include media-breakpoint-up('sm') {
    margin-bottom: 40px;
    margin-top: 40px;
  }

  &__category {
    flex: 1 1;
    margin: 0;
    text-align: center;

    h5 {
      margin: 0;
    }

    a {
      color: $body-color;
      width: 100%;
    }
  }

  @include media-breakpoint-only('xs') {
    .list-sm-up {
      display: none;
    }

    .list-xs {
      display: block;
    }
    &.container {
      padding: 0;
    }

    flex-flow: column nowrap;

    &__category {
      text-align: left;
      width: 100%;

      & + & {
        border-top: 1px solid $gray-700;
      }

      &:first-child {
        border-top: 1px solid $gray-300;
      }

      ul {
        margin: 0;
      }

      li {
        font-size: $font-size-smaller;
        padding-left: 15px;

        a {
          display: block;
          padding: 15px 0;
        }
      }

      &--active {
        .ui-icon {
          transform: rotate(180deg);
        }
      }
    }

    h5 {
      background: $gray-200;
      padding: 20px 20px 20px 10px;
      font-size: $font-size-h6;

      @include flex(space-between);

      .ui-icon {
        color: $gray-700;
        display: inline;
        font-size: 22px;
        transition: transform 0.3s;
      }
    }
  }
}
</style>
