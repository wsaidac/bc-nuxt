<template>
  <div :class="classes">
    <ul class="header-links-mobile__nav">
      <li
        v-if="active"
        class="header-links-mobile__back-to-main"
        @click="active = ''"
      >
        <ui-icon icon="chevron-left" />
        <span @click="setActive('')">{{ $t('header.main-nav') }}</span>
      </li>
      <li
        v-for="category in items"
        :key="category.title"
        class="header-links-mobile__main-item"
      >
        <div
          v-if="!active"
          @click="setActive(category.title)"
        >
          <span v-text="category.title" />
        </div>
        <ul
          v-if="active && category.title === active"
          class="header-links-mobile__sub"
        >
          <li
            v-for="subcategory in category.categories"
            :key="subcategory.id"
            class="header-links-mobile__sub-item"
          >
            <nuxt-link
              :to="$contextPath(subcategory.url)"
              :title="subcategory.title"
              @click.native="$emit('close-menu')"
              v-html="subcategory.title"
            />
          </li>
        </ul>
      </li>
    </ul>
    <ul class="header-links-mobile__pages">
      <li>
        <header-login
          class="header-links-mobile__main-item, header-links-mobile__login"
          @click.native="$emit('closemenu')"
        />
      </li>
      <li
        v-for="link in links"
        :key="link.title"
        class="header-links-mobile__main-item"
      >
        <nuxt-link
          v-if="link.title !== 'Help'"
          :to="$contextPath(link.url)"
          :title="link.title"
          @click.native="$emit('close-menu')"
        >
          {{ link.title }}
        </nuxt-link>

        <a
          v-if="link.title === 'Help'"
          :href="link.url"
          :title="link.title"
        >
          {{ link.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import HeaderLogin from './login';
import { UiIcon } from '~/components/ui';
import { mapGetters } from 'vuex';
import faqUrl from '~/mixins/faqUrl';

export default {
  components: {
    HeaderLogin,
    UiIcon,
  },

  mixins: [faqUrl],

  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      active: '',
    };
  },

  computed: {
    ...mapGetters('menus', ['footer']),
    classes() {
      return [
        'header-links-mobile',
        { 'header-links-mobile--open': this.menuOpen },
        { 'header-links-mobile--active': this.active },
      ];
    },
    links() {
      return [
        this.transformLink('aboutUs'),
        this.transformLink('paymentMethods'),
        { title: this.$t('general.help'), url: this.faqUrl },
        this.transformLink('privacyPolicy'),
        this.transformLink('generalConditions'),
        this.transformLink('cookieStatement'),
      ].filter(link => link);
    },
  },

  methods: {
    setActive(v) {
      this.active = v;
    },
    transformLink(linkName) {
      const link = this.footer[linkName];
      if (!link || !link.slug) return '';

      return {
        title: link.href.title,
        url: link.slug,
      };
    },
  },
};
</script>

<style lang="scss">
.header-links-mobile {
  background: $white;
  border-top: 3px solid red;
  font-size: 14.4px;
  overflow: hidden;
  position: absolute;
  right: 0;
  transition: width 0.4s;
  width: 0;
  z-index: $z-index-links;

  a {
    border-top: 1px solid $gray-400;
    color: $black;
    display: block;
    overflow: hidden;
    padding: 15px 0;
    white-space: nowrap;
    width: 100%;
  }

  ul {
    background: $white;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0 20px;

    &.header-links-mobile__pages {
      background: $gray-100;

      a:hover {
        background: #f8f8f8;
      }
    }

    &.header-links-mobile__sub {
      padding: 0;
    }
  }

  &__main-item {
    font-weight: $font-weight-mediumbold;
  }

  &__nav {
    .header-links-mobile__main-item {
      div span {
        border-bottom: 1px solid $gray-100;
        color: $black;
        display: block;
        font-weight: $font-weight-mediumbold;
        padding: 15px 0;
        width: 100%;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      &:last-child {
        div span {
          border-bottom: 0;
        }
      }
    }
  }

  &__back-to-main {
    color: $gray-600;
    font-weight: $font-weight-mediumbold;
    overflow: hidden;
    padding: 15px 0;
    white-space: nowrap;
    width: 100%;

    .ui-icon-chevron-left {
      font-size: 14px;
      position: relative;
      top: -2px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__sub {
    font-weight: $font-weight-mediumbold;
  }

  &__login {
    border-top: 0 !important;
    color: $black;
    display: block !important;
    font-weight: $font-weight-bold;

    &:hover {
      color: $black;
      text-decoration: underline;
    }
  }

  &--active {
    .header-links-mobile__nav .header-links-mobile__main-item {
      border-bottom: 0;
    }
  }

  &--open {
    width: 80%;
  }

  @include media-breakpoint-up("sm") {
    display: none;
  }
}
</style>
