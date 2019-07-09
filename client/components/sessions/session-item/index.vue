<template>
  <div class="cg-session-item">
    <ui-icon
      :icon="session.mobile ? 'smartphone' : 'desktop'"
      class="cg-session-item__icon"
    />
    <div class="cg-session-item__title">
      {{ session.platform }}
      &middot;
      IP: {{ session.ip }}
    </div>
    <div class="cg-session-item__activity">
      {{ session.browser }}
      &middot;
      <strong
        v-if="session.currentSession"
        v-text="$t('account.active-now')"
      />
      <span
        v-else
        v-text="$d(new Date(session.createdAt), 'long')"
      />
    </div>
    <ui-button
      v-if="!session.currentSession"
      type="tertiary"
      @click="logout(session.id)"
    >
      {{ $t('account.logout') }}
    </ui-button>
  </div>
</template>

<script>
import { UiIcon, UiButton } from '~/components/ui';

export default {
  components: {
    UiIcon,
    UiButton,
  },

  props: {
    session: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    async logout(sessionId) {
      await this.$mutation('logout', { sessionId, action: 'SINGLE' });
      this.$emit('logout');
    },
  },
};
</script>

<style lang="scss">
.cg-session-item {
  border-bottom: 1px solid $gray-600;
  color: $gray-600;
  padding: 8px 8px 8px 40px;
  position: relative;

  &__icon {
    font-size: 24px;
    margin-top: -12px;

    @include position(absolute, 50% null null 0);
  }

  &__title {
    font-weight: $font-weight-bold;
  }

  &__activity {
    font-size: $font-size-small;

    strong {
      color: $success-500;
    }
  }

  .el-button {
    margin-top: -14px;

    @include position(absolute, 50% 0 null null);
  }
}
</style>
