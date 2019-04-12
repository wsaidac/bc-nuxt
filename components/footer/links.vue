<template>
  <div class="footer-links">
    <ui-collapse class="footer-links__mobile">
      <ui-collapse-item
        v-for="(links, title) in footerLinks"
        :key="title"
        :title="title"
      >
        <ul class="footer-links__list list-unstyled">
          <li
            v-for="(link, i) in links"
            :key="i"
          >
            <nuxt-link
              :to="$contextPath(link.url)"
              :title="link.title"
            >
              {{ link.displayName }}
            </nuxt-link>
          </li>
        </ul>
      </ui-collapse-item>
    </ui-collapse>
    <div class="container footer-links__desktop">
      <ui-row>
        <ui-col
          v-for="(links, title) in footerLinks"
          :key="title"
          :span="8"
        >
          <h5 v-text="title" />
          <ul class="footer-links__list list-unstyled">
            <li
              v-for="(link, i) in links"
              :key="i"
            >
              <a
                v-if="link.help"
                :href="link.url"
              >
                {{ link.displayName }}
              </a>
              <nuxt-link
                v-else
                :to="$contextPath(link.url)"
                :title="link.title"
              >
                {{ link.displayName }}
              </nuxt-link>
            </li>
          </ul>
        </ui-col>
      </ui-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
/* eslint-disable */
import { UiCol, UiCollapse, UiCollapseItem, UiRow } from "~/components/ui";
import faqUrl from '~/mixins/faqUrl';

export default {
  name: "FooterLinks",

  components: {
    UiCol,
    UiCollapse,
    UiCollapseItem,
    UiRow
  },

  data() {
    return {}
  },
  mixins: [faqUrl],
  computed: {
    ...mapGetters('menus', ['footer']),
    footerLinks() {
      const columns = {};

      columns[this.$t("general.domain")] = [
        this.transformLink('aboutUs'),
        this.transformLink('paymentMethods'),
      ];
      columns[this.$t("footer.customer-care")] = [
        { help: true, displayName: this.$t("general.help"), url: this.faqUrl, title: this.$t("general.help") },
      ];
      columns[this.$t("internal-links.terms-of-use")] = [
        this.transformLink('privacyPolicy'),
        this.transformLink('generalConditions'),
        this.transformLink('rightOfWithdrawal'),
        this.transformLink('cookieStatement'),
      ];

      Object.keys(columns).forEach(key => {
        columns[key] = columns[key].filter(v => v);
      });

      return columns;
    },
  },

  methods: {
    transformLink(linkName) {
      const link = this.footer[linkName];
      if (!link || !link.slug) return null;
      let displayName = link.slug;
      displayName = displayName[0].toUpperCase() + displayName.slice(1).replace(/-/g, ' ');
      return {
        displayName,
        title: (link.meta && link.meta.title) || '',
        url: link.slug
      };
    }
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
      flex-flow: row nowrap;
      font-size: 1.3em;
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
    margin-top: 15px;

    li {
      color: $black !important;
      margin: 1px 0;

      a {
        color: $black;
        display: block;
        font-size: $font-size-base;
      }
    }
  }

  @include media-breakpoint-up("sm") {
    &__mobile {
      display: none;
    }
  }

  @include media-breakpoint-only("xs") {
    ul.footer-links__list {
      margin: 0;

      li {
        margin: 10px 0;
      }
    }
  }

  &__desktop {
    margin-bottom: 40px;

    @include media-breakpoint-only("xs") {
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
