<template>
  <div class="cg-sidebar">
    <sidebar-panel :title="$t('account.my-account')">
      <div class="cg-sidebar__content">
        <nuxt-link
          v-for="link in accountLinks"
          :key="link.label"
          :to="link.to"
        >
          <ui-icon
            v-if="$route.path === link.to"
            icon="arrow-right-open"
          />
          {{ $t(link.label) }}
        </nuxt-link>
      </div>
    </sidebar-panel>

    <ui-button
      block
      justify
      type="primary"
      native-type="submit"
      class="cg-sidebar__logout"
      @click="logout"
    >
      {{ $t('logout') }}
      <ui-icon icon="arrow-right-open" />
    </ui-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { UiIcon, UiButton } from '~/components/ui';
import SidebarPanel from './panel';

export default {
  name: 'SidebarMain',

  components: {
    SidebarPanel,
    UiButton,
    UiIcon,
  },

  data() {
    return {
      accountLinks: [
        { label: 'account.orders.order-history', to: 'order-history' },
        { label: 'account.personal-details', to: 'profile' },
        { label: 'account.sessions-management', to: 'sessions' },
      ],
    };
  },
  computed: {
    ...mapGetters('merchant', ['currentLabel']),
  },
  methods: {
    async logout() {
      await this.$m('logout', { action: 'CURRENT' });
      window.location.reload();
    },
  },
};
</script>

<style lang="scss">
.cg-sidebar {
  &__content {
    padding: 15px 0 20px 0;
  }

  a {
    color: $black;
    display: block;
    margin-left: 30px;
    margin-top: 5px;
    position: relative;

    &:hover {
      color: $gray-800;
    }

    &.nuxt-link-exact-active {
      color: $gray-800;
      font-weight: $font-weight-bold;
    }

    .ui-icon-arrow-right-open {
      color: $primary-500;

      @include position(absolute, 3px null null -20px);
    }
  }

  &__help {
    a:first-child {
      color: $gray-800;
      cursor: default;
      pointer-events: none;
    }

    .cg-sidebar__content {
      padding: 0 0 30px 0;

      &:first-of-type {
        padding-top: 10px;
      }
    }
  }

  &__logout {
    margin-bottom: 20px;
    padding-left: 30px !important;
    padding-right: 30px !important;

    span {
      @include flex(space-between, center);
    }
  }
}
</style>
