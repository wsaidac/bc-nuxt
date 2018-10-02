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
            <span v-text="category.title" />
          </div>
          <ul class="header-navbar__sub-navigation">
            <li
              v-for="product in category.products"
              :key="product.id"
              class="header-navbar__sub-item"
            >
              <nuxt-link
                :to="product.url"
                :title="product.title"
              >
                {{ product.title }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
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

    @include media-breakpoint-up('sm') {
      padding: 11px 7px;
      width: 115px;
    }

    @include media-breakpoint-up('md') {
      width: 200px;
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
    cursor: pointer;
    display: flex;
    height: 100%;
    padding: 30px 10px;
    position: relative;

    @include media-breakpoint-up('md') {
      padding: 30px 15px;
    }

    @include media-breakpoint-up('lg') {
      padding: 30px 25px;
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
        display: block;
      }
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

    @include position(absolute, 100% null null 0);
  }

  &__sub-item {
    border-bottom: 1px solid $gray-300;

    a {
      color: $body-color;
      display: block;
      padding: 10px 0;
      width: 200px;

      &:hover {
        color: $primary-500;
        text-decoration: none;
      }
    }
  }
}
</style>
