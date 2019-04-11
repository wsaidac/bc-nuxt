<template>
  <section class="cg-container cg-request-reset container container-margin">
    <ui-alert
      v-if="resetError"
      :title="$t('account.request_reset_password.error_title')"
      :description="$t(resetError)"
      type="error"
      @close="resetError = null"
    />
    <ui-row>
      <ui-col :lg="{ span: 16, offset: 3 }">
        <div v-if="requested">
          <ui-message :title="$t('account.password-reset-sent')">
            <p v-text="$t('account.check-your-email')" />
            <i18n
              path="email-sent-to"
              tag="p"
            >
              <strong place="email">
                {{ email }}
              </strong>
            </i18n>
          </ui-message>
          <ui-button
            type="primary"
            justify
            @click="tryAgain"
          >
            {{ $t('account.retry-reset') }}
            <ui-icon icon="arrow-right-open" />
          </ui-button>
        </div>
        <ui-panel
          v-else
          :title="$t('account.lost-password-help')"
        >
          <form-request-reset
            @submit="onRequest"
            @error="onError"
          />
        </ui-panel>
      </ui-col>
    </ui-row>
  </section>
</template>

<script>
import FormRequestReset from '~/components/form/request-reset';
import {
  UiAlert, UiButton, UiCol, UiIcon, UiMessage, UiPanel, UiRow,
} from '~/components/ui.js';

export default {
  layout: 'users',

  components: {
    FormRequestReset,
    UiAlert,
    UiButton,
    UiCol,
    UiIcon,
    UiMessage,
    UiPanel,
    UiRow,
  },

  data() {
    return {
      resetError: null,
      requested: false,
      email: null,
    };
  },

  methods: {
    onRequest({ email }) {
      this.requested = true;
      this.email = email;
    },

    onError(error) {
      this.resetError = error;
    },

    tryAgain() {
      this.requested = false;
    },
  },
};
</script>

<style lang="scss">
.cg-request-reset {
  & > .el-row > .el-col {
    margin-top: 20px;
  }
}
</style>
