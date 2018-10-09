<template>
  <nav class="header-navbar">
    <div class="container">
      <h1 class="header-navbar__brand">
        <nuxt-link to="/">
          <img
            alt="Rapido"
            src="~/assets/images/logo-white.svg"
          >
        </nuxt-link>
      </h1>
      <ul class="header-navbar__navigation">
        <li
          v-for="category in items"
          :key="category.title"
          class="header-navbar__main-item"
        >
          <div>
            <img :src="category.imageUrl" ><span v-text="category.title" />
          </div>
          <ul class="header-navbar__sub-navigation">
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
      </ul>
      <a
        href="https://www.rapido.com/us/faq"
        alt="help"
        class="header-navbar__help">Help</a>
    </div>
  </nav>
</template>

<script>
import { UiCol, UiRow } from '~/components/ui';

export default {
  name: 'HeaderNavbar',

  components: {
    UiCol,
    UiRow,
  },

  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
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

    @include media-breakpoint-up("sm") {
      padding: 11px 7px;
      width: 115px;
    }

    @include media-breakpoint-up("md") {
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
    list-style: none;
    margin: 0;
  }

  &__main-item {
    align-items: center;
    border-left: 1px solid $primary-700;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    height: 100%;
    padding: 30px 10px;
    position: relative;

    & > div {
      @include flex(center, center);
    }

    img {
      height: 24px;
      margin-right: 6px;
    }

    @include media-breakpoint-up("md") {
      padding: 30px 15px;
    }

    @include media-breakpoint-up("lg") {
      padding: 30px 25px;
    }

    &:hover {
      background: $primary-600;

      &::after {
        background: $danger-500;
        content: "";
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
  }

  &__help {
    color: $white;
    font-size: 15.75px;
    padding-left: 20px;

    @include flex(center, center);

    &:hover {
      color: $white;
      text-decoration: none;
    }
  }

  &__sub-navigation {
    background: $white;
    box-shadow: 0 3px 6px -3px #aaa;
    display: none;
    list-style: none;
    margin: 0;
    padding: 0 25px 10px 25px;
    z-index: $z-index-navigation;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-template-rows: repeat(10, auto);
    grid-column-gap: 10px;
    min-width: 100%;

    @include position(absolute, 100% null null 0);
  }

  &__sub-item {
    border-top: 1px solid $gray-300;

    a {
      color: $body-color;
      display: block;
      padding: 10px 0;
      min-width: 150px;

      &:hover {
        color: $primary-500;
        text-decoration: none;
      }
    }
  }

  @include media-breakpoint-down("md") {
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
}
</style>
