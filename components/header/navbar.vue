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
        <li>
          <div class="item">
            Mobile Recharge
          </div>
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

    @include media-breakpoint-up("sm") {
      padding: 11px 7px;
      width: 115px;
    }

    @include media-breakpoint-up("md") {
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

    .item {
      align-items: center;
      display: flex;
      height: 100%;
    }
  }
}
</style>
