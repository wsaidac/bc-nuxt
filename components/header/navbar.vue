<template>
  <nav :class="['header-navbar', { 'header-navbar--open': menuOpen }]">
    <div class="overlay">
      <div
        class="overlay__black"
        @click="toggleMenu"
      />
      <div class="overlay__gray" />
    </div>
    <div class="container">
      <h1 class="header-navbar__brand">
        <nuxt-link to="/">
          <img
            alt="Rapido"
            src="~/assets/images/logo-white.svg"
          >
        </nuxt-link>
      </h1>
      <ul :class="classes">
        <li class="header-navbar__main-item header-navbar__main-item-back">
          <ui-icon icon="chevron-left" />
          <span
            @click="setActive('')"
            v-text="'Main menu'"
          />
        </li>
        <li
          v-for="category in items"
          :key="category.title"
          class="header-navbar__main-item"
        >
          <div @click="setActive(category.title)">
            <img
              :alt="category.title"
              :src="category.image.regular"
              :srcset="`${category.image.regular}, ${category.image.retina} 2x`"
            >
            <span v-text="category.title" />
          </div>

          <ul :class="['header-navbar__sub-navigation', { 'header-navbar__sub-navigation--active': active === category.title }]">
            <li
              v-for="subcategory in category.categories"
              :key="subcategory.id"
              class="header-navbar__sub-item"
            >
              <nuxt-link
                :to="subcategory.url"
                :title="subcategory.title"
              >
                {{ subcategory.title }}
              </nuxt-link>
            </li>
          </ul>
        </li>
        <div class="spacer" />
        <header-login />
        <li class="header-navbar__service help">
          <a
            href="https://www.rapido.com/us/faq"
            title="help"
          >Help</a>
        </li>
      </ul>
      <div
        class="header-navbar__mobile-opener"
        @click="toggleMenu"
      >
        <span>Menu</span>
        <navbar-hamburger :active="menuOpen" />
      </div>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
import { UiCol, UiRow, UiIcon } from "~/components/ui";
import NavbarHamburger from "./hamburger";
import HeaderLogin from "./login";

export default {
  name: "HeaderNavbar",

  components: {
    NavbarHamburger,
    UiCol,
    UiIcon,
    UiRow,
    HeaderLogin
  },

  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      menuOpen: false,
      active: ""
    };
  },

  computed: {
    classes() {
      return [
        "header-navbar__navigation",
        { "header-navbar__navigation--open": this.menuOpen },
        { "header-navbar__navigation--has-active": this.active !== "" }
      ];
    }
  },

  methods: {
    setActive(v) {
      this.active = v;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style lang="scss">
.header-navbar {
  background: $primary-500;
  color: $white;

  .container {
    display: flex;
  }

  &__brand {
    margin: 0;
    padding: 0;
    width: 95px;

    @include flex(center, center);

    @include media-breakpoint-up('sm') {
      padding: 11px 7px;
      width: 115px;
    }

    @include media-breakpoint-up('md') {
      width: 200px;
    }

    a {
      display: block;
      width: 100%;
    }

    img {
      max-height: 100%;
    }
  }

  &__navigation {
    align-items: stretch;
    display: flex;
    flex-grow: 1;
    list-style: none;
    margin: 0;
    max-width: 985px;
    padding-left: 10px;
  }

  .spacer {
    flex-grow: 1;
  }

  &__main-item {
    align-items: center;
    border-right: 1px solid $primary-700;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    height: 100%;
    padding: 30px 10px;
    position: relative;

    @include media-breakpoint-up('sm') {
      &:nth-child(2) {
        border-left: 1px solid $primary-700;
      }
    }

    & > div {
      @include flex(center, center);
    }

    img {
      height: 24px;
      margin-right: 6px;
    }

    @include media-breakpoint-up('md') {
      padding: 30px 15px;
    }

    @include media-breakpoint-up('lg') {
      padding: 30px 15px;
    }

    &:hover {
      background: $primary-600;

      &::after {
        background: $danger-500;
        content: '';
        display: block;
        z-index: ($z-index-navigation + 1);

        @include position(absolute, null null -3px 0);
        @include size(100%, 3px);
      }

      .header-navbar__sub-navigation {
        display: grid;
      }
    }

    &:last-child {
      border-right: 1px solid $primary-700;
    }

    &-back {
      display: none;
      padding: 0 !important;
    }
  }

  &__service {
    font-size: 15.75px;
    padding: 0 20px;

    a {
      color: $white;
      display: block;
      height: 100%;
      text-decoration: none;

      @include flex(center, center);
    }

    &:hover {
      color: $white;
      text-decoration: none;
    }
  }

  &__sub-navigation {
    background: $white;
    box-shadow: 0 3px 6px -3px #aaa;
    display: none;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    grid-template-rows: repeat(10, auto);
    list-style: none;
    margin: 0;
    min-width: 100%;
    padding: 0 25px 10px 25px;
    z-index: $z-index-navigation;

    @include position(absolute, 100% null null 0);
  }

  &__sub-item {
    border-top: 1px solid $gray-300;

    a {
      color: $body-color;
      display: block;
      min-width: 150px;
      padding: 10px 0;

      &:hover {
        color: $primary-500;
        text-decoration: none;
      }
    }
  }

  &__mobile-opener {
    display: none;
  }

  @include media-breakpoint-down('md') {
    &__main-item {
      font-size: 13.5px;

      img {
        display: none;
      }
    }

    &__sub-item {
      font-size: 12px;
    }
  }

  @include media-breakpoint-only('xs') {
    .container {
      background: $primary-500;
      height: 50px;
      padding-left: 15px;
      position: relative;
      z-index: 100;

      @include flex(space-between);
    }

    &__navigation {
      background: $white;
      border-top: 3px solid #ee4136;
      color: $black;
      flex-flow: column nowrap;
      font-weight: $font-weight-bold;
      overflow: hidden;
      padding: 0;
      position: relative;
      transition: all 0.5s;
      width: 0;
      z-index: 10000;

      @include position(absolute, 50px 0 null null);

      &--open {
        width: 80%;
      }

      &--has-active {
        li.header-navbar__main-item {
          border: 0;
          padding: 0;
          position: relative;
          text-decoration: none;
          z-index: 2000;

          div {
            display: none;
          }

          .header-navbar__sub-navigation--active {
            display: flex;
            flex-flow: column nowrap;
            position: static;
          }
        }

        li.header-navbar__main-item-back {
          color: $gray-500;
          display: flex;
          padding: 20px 0;

          .ui-icon {
            margin-right: 10px;
          }
        }
      }
    }

    &__sub-navigation {
      padding: 0;

      li {
        font-size: 14.4px;

        &:hover {
          color: $black;
        }

        a {
          color: $black !important;
          height: 40px;

          @include flex(null, center);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &__main-item {
      border: 0;
      font-size: 14.4px;
      height: auto;
      margin: 0 20px;
      overflow: hidden;
      padding: 0;
      white-space: nowrap;
      z-index: 5000;

      div {
        width: 100%;
      }

      span {
        padding: 20px 0;
        width: 100%;
      }

      &:hover {
        background: white;
        text-decoration: underline;
      }

      & + & {
        border-top: 1px solid $gray-200;
      }
    }

    &__service {
      background: $gray-100;
      flex-grow: 1;

      a {
        color: $black;
        display: block;
        padding: 15px 0;
      }

      &:last-child {
        a {
          border-top: 1px solid $gray-200;
        }
      }
    }

    &__mobile-opener {
      background: $primary-600;
      display: block;
      font-size: 16px;
      height: 100%;
      padding: 0 0 0 30px;

      @include flex(center, center);
    }
  }

  .overlay {
    transition: all 0.5s;
    width: 0;
    z-index: 50;

    @include position(fixed, 0 0 0 null);
    @include flex();

    &__black {
      background: $black;
      flex: 0 0 20%;
      opacity: 0.3;
    }

    &__gray {
      background: $gray-100;
      flex-grow: 1;
      pointer-events: none;
    }
  }

  &--open {
    .overlay {
      width: 100% !important;
    }
  }
}
</style>
