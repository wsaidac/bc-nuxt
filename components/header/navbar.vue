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
            class="header-navbar__help"
            :href="$contextPath('faq')"
            title="help"
          >
            {{ $t('general.help') }}
          </a>
          <div class="header-navbar__locale">
            language
          </div>
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
  </nav>
</template>

<script>
import HeaderLogin from './login';
import HeaderLinksDesktop from './links-desktop';
import HeaderLinksMobile from './links-mobile';
import HeaderHamburger from './hamburger';

export default {
  components: {
    HeaderLogin,
    HeaderLinksDesktop,
    HeaderLinksMobile,
    HeaderHamburger,
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
    };
  },

  computed: {
    classes() {
      return ['header-navbar', { 'header-navbar--open': this.menuOpen }];
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
  }
}
</style>
