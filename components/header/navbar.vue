<template>
  <nav :class="classes">
    <div
      class="header-navbar__overlay-black"
      @click="menuOpen = false"
    />
    <div class="header-navbar__overlay-gray" />
    <div class="header-navbar__top">
      <div class="header-navbar__top-content container">
        <h1 class="header-navbar__brand">
          <nuxt-link :to="$contextPath('')">
            <img
              :alt="$t('general.domain')"
              src="~/assets/images/logo-white.svg"
            >
          </nuxt-link>
        </h1>
        <div class="spacer" />
        <div class="header-navbar__top-right">
          <header-login />
          <a
            :href="$contextPath('faq')"
            class="header-navbar__help"
            title="help"
          >
            {{ $t('general.help') }}
          </a>
          <button
            class="header-navbar__country-select"
            @click="showDialog = true"
          >
            <span class="header-navbar__country-name">{{ country.name }}</span>
            <img
              :src="countryFlag"
              alt="country-flag"
            >
            <ui-icon icon="caret-white" />
          </button>
          <div
            class="header-navbar__menu"
            @click="menuOpen = !menuOpen"
          >
            <span class="header-navbar__menu-text">Menu</span>
            <header-hamburger :active="menuOpen" />
          </div>
        </div>
      </div>
    </div>
    <header-links-desktop :items="items" />
    <header-links-mobile
      :items="items"
      :menu-open="menuOpen"
      @close-menu="menuOpen = false"
    />
    <header-locale-select
      :showdialog="showDialog"
      @hideDialog="showDialog = false"
    />
  </nav>
</template>

<script>
import HeaderLogin from './login';
import HeaderLinksDesktop from './links-desktop';
import HeaderLinksMobile from './links-mobile';
import HeaderHamburger from './hamburger';
import HeaderLocaleSelect from './locale-select';
import { UiIcon } from '~/components/ui';

import flags from '~/assets/flags.js';

export default {
  components: {
    HeaderLogin,
    HeaderLinksDesktop,
    HeaderLinksMobile,
    HeaderHamburger,
    HeaderLocaleSelect,
    UiIcon,
  },

  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      menuOpen: false,
      active: '',
      showDialog: false,
    };
  },

  computed: {
    classes() {
      return ["header-navbar", { "header-navbar--open": this.menuOpen }];
    },
    country() {
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale);
    },
    countryFlag() {
      return flags[this.country.name.toLowerCase()];
    },
  },
};
</script>


<style lang="scss">
.header-navbar {
  font-size: 14px;

  .spacer {
    flex-grow: 1;
  }

  .header-navbar__overlay-black {
    background: $black;
    opacity: 0.3;
    transition: width 0.4s;
    width: 0;
    z-index: $z-index-overlay-menu;

    @include position(fixed, 0 0 0 null);
  }

  .header-navbar__overlay-gray {
    background: $gray-100;
    transition: width 0.4s;
    width: 0;
    z-index: $z-index-overlay-menu;

    @include position(fixed, 0 0 0 null);
  }

  &--open {
    .header-navbar__overlay-black {
      width: 100%;
    }

    .header-navbar__overlay-gray {
      width: 80%;
    }
  }

  &__top {
    background: $primary-500;
    font-size: 1.125em;
    position: relative;
    z-index: $z-index-header-navbar-top;

    &-content {
      color: $white;
      height: 55px;

      @include flex(flex-start, center);
    }
  }

  &__top-right {
    height: 100%;

    @include flex();

    & > a {
      @include flex(center, center);
    }

    & > * {
      padding: 0 30px;
    }
  }

  &__country-select {
    background-color: #1000e3;
    border: 0;
    color: var(--header-color-base, #000);
    font-size: $font-size-h5;
    height: 100%;
    padding: 0 15px;

    @include flex(null, center);

    .ui-icon-caret-white {
      color: white;
    }

    img {
      height: 20px;
      margin: 0 7px;
    }
  }

  &__country-name {
    color: $white;
  }

  &__brand {
    margin: 2px 0 0 33.5px;
    width: 131.49px;
  }

  &__help {
    color: $white;

    &:hover {
      color: $white;
      text-decoration: none;
    }
  }

  &__menu {
    background: $primary-700;
    cursor: pointer;

    @include flex(center, center);

    .header-navbar__menu-text {
      font-size: 15px;
      margin-right: 10px;
      position: relative;
      top: -2px;
    }
  }

  @include media-breakpoint-down("md") {
    font-size: 12px;
  }

  @include media-breakpoint-up("sm") {
    .header-navbar__menu {
      display: none;
    }
  }

  @include media-breakpoint-only("xs") {
    height: 50px;

    .header-navbar__top-content {
      height: 50px;
    }

    .header-navbar__top-content.container {
      padding-right: 0;
    }

    .header-login,
    .header-navbar__help {
      display: none;
    }

    &__country-select {
      background: $primary-500;
      border-left: 1px solid #1000e3;

      .ui-icon-caret-white {
        display: none;
      }
    }
  }
}
</style>
