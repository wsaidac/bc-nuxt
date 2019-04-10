<template>
  <div class="cg-sessions container container-margin">
    <ui-row>
      <ui-col :md="8">
        <sidebar-main />
      </ui-col>
      <ui-col :md="16">
        <ui-panel
          :title="$t('account.login-history')"
          color="primary"
        >
          <ui-form-section :title="$t('account.where-youre-logged-in')">
            <session-item
              v-for="session in activeSessions"
              :key="session.id"
              :session="session"
              @logout="refresh"
            />

            <p class="text-right">
              <ui-button
                type="tertiary"
                class="cg-sessions__log-al-out"
                @click="logoutAll"
              >
                {{ $t('account.logout-everywhere') }}
              </ui-button>
            </p>
          </ui-form-section>
        </ui-panel>
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
import SidebarMain from '~/components/sidebar/main';
import SessionItem from '~/components/sessions/session-item';
import {
  UiCol, UiFormSection, UiButton, UiRow, UiPanel,
} from '~/components/ui';

export default {
  layout: 'users',

  components: {
    SessionItem,
    SidebarMain,
    UiCol,
    UiFormSection,
    UiButton,
    UiRow,
    UiPanel,
  },
  async asyncData({ app }) {
    const { activeSessions } = await app.$q('activeSessions');
    return {
      activeSessions,
    };
  },
  methods: {
    async refresh() {
      const { activeSessions } = await this.$q('activeSessions');
      this.activeSessions = activeSessions;
    },
    async logoutAll() {
      await this.$mutate('logout', { action: 'ALL' });
      window.location.reload();
    },
  },
};
</script>
