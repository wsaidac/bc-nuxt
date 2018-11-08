<template>
  <div class="footer-links">
    <ui-collapse class="footer-links__mobile">
      <ui-collapse-item
        v-for="(column, i) in columns"
        :key="i"
        :title="column.title"
      >
        <ul class="footer-links__list list-unstyled">
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
      </ui-collapse-item>
    </ui-collapse>
    <div class="container footer-links__desktop">
      <ui-row>
        <ui-col
          v-for="(column, i) in columns"
          :key="i"
          :span="8"
        >
          <h5 v-text="column.title" />
          <ul class="footer-links__list list-unstyled">
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
        </ui-col>
      </ui-row>
    </div>
  </div>
</template>

<script>
import {
  UiCol,
  UiCollapse,
  UiCollapseItem,
  UiRow,
} from '~/components/ui';

export default {
  name: 'FooterLinks',

  components: {
    UiCol,
    UiCollapse,
    UiCollapseItem,
    UiRow,
  },

  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.footer-links {
  .el-collapse {
    width: 100%;
  }

  .el-collapse-item {
    .el-collapse-item__content {
      padding: 0 15px;
    }

    .el-collapse-item__header {
      background: $gray-100;
      border-top: 1px solid $gray-900;
      flex-flow: row-reverse nowrap;
      font-size: 16.8px;
      font-weight: 900;
      line-height: 24px;
      padding-left: 15px;

      @include flex(space-between, center);

      .el-collapse-item__arrow {
        height: 100%;

        &::after {
          @include svg-icon(
            24px,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path fill="#{$gray-900}" d="M819 1331L77 589q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 166q19 19 19 45t-19 45l-742 742q-19 19-45 19t-45-19z"/></svg>'
          );
        }
      }

      &.is-active {
        border-bottom: 1px solid $gray-900;

        .el-collapse-item__arrow {
          transform: rotate(180deg);

          &::after {
            @include svg-icon(
              24px,
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path fill="black" d="M819 1331L77 589q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 166q19 19 19 45t-19 45l-742 742q-19 19-45 19t-45-19z"/></svg>'
            );
          }
        }
      }
    }
  }

  ul.footer-links__list {
    margin: 0;

    li {
      color: $black !important;
      margin: 10px 0;

      a {
        color: $black;
        display: block;
        font-size: $font-size-smaller;
      }
    }
  }

  @include media-breakpoint-up('sm') {
    &__mobile {
      display: none;
    }
  }

  &__desktop {
    margin-bottom: 40px;
    // width: 100%;

    @include media-breakpoint-only('xs') {
      display: none;
    }

    h5,
    a {
      text-align: center;
    }

    h5 {
      margin: 15px 0 5px;
    }
  }
}
</style>
