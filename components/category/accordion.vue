<template>
  <div class="category-accordion">
    <ui-collapse :value="1">
      <ui-collapse-item
        :name="1"
        title="Benefits of Rapido.com"
      >
        <cg-usps
          :usps="usps"
          :mobile-carousel="false"
          mode="vertical"
        />
      </ui-collapse-item>
      <ui-collapse-item
        v-for="(slide, index) in slides"
        :key="index"
        :title="slide.question"
      >
        <div v-html="slide.answer" />
      </ui-collapse-item>
    </ui-collapse>
  </div>
</template>

<script>
import { UiCollapse, UiCollapseItem } from '~/components/ui';
import CgUsps from '~/components/usps';

export default {
  name: 'CategoryAccordion',

  components: {
    UiCollapse,
    UiCollapseItem,
    CgUsps,
  },

  props: {
    usps: {
      type: Array,
      default() {
        return [];
      },
    },
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.category-accordion {
  .el-collapse-item {
    .el-collapse-item__header {
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
        border-bottom-color: rgb(235, 238, 245) !important;

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

    .el-collapse-item__content {
      font-size: 14px;
      padding: 5px 15px;
    }

    &:first-child {
      .el-collapse-item__content {
        padding: 0;
      }
    }
  }

  @include media-breakpoint-down("md") {
    .el-collapse-item {
      .el-collapse-item__header {
        font-size: 14.4px;
      }

      .el-collapse-item__content {
        font-size: 12px;
      }
    }
  }

  @include media-breakpoint-down("xs") {
    margin-bottom: 20px;

    .el-collapse-item {
      .el-collapse-item__header {
        font-size: 15.8px;
      }

      .el-collapse-item__content {
        font-size: 13.2px;
      }
    }
  }
}
</style>
