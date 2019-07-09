<template>
  <section class="cg-container cg-reset-password container container-margin">
    <ui-row>
      <ui-col :lg="{ span: 12, offset: 6 }">
        <ui-alert
          v-if="resetError"
          :title="$t('account.reset_password.resetError.title')"
          type="error"
          @close="resetError = null"
        />
        <template v-if="reset">
          <ui-message
            :title="$t('account.reset_password.submit.title')"
            :message="$t('account.reset_password.submit.message')"
          />
          <ui-button
            type="primary"
            justify
            @click="$router.push(localePath('account-profile'))"
          >
            {{ $t('account.reset_password.submit.profile') }}
            <ui-icon icon="arrow-right-open" />
          </ui-button>
        </template>
        <template v-else-if="invalid">
          <ui-message
            :title="$t('account.reset_password.invalid.title')"
            :message="$t('account.reset_password.invalid.message')"
          />
          <ui-button
            type="primary"
            justify
            @click="$router.push(localePath('sessions-request-reset'))"
          >
            {{ $t('account.reset_password.invalid.retry') }}
            <ui-icon icon="arrow-right-open" />
          </ui-button>
        </template>
        <ui-panel
          v-else
          :title="$t('account.reset_password.reset')"
          color="success"
        >
          <form-reset-password
            :reset-password-token="resetPasswordToken"
            :user-id="userId"
            @error="onError"
            @submit="onReset"
          />
        </ui-panel>
      </ui-col>
    </ui-row>
  </section>
</template>

<script>
import FormResetPassword from '~/components/form/reset-password';
import {
  UiAlert,
  UiButton,
  UiCol,
  UiIcon,
  UiMessage,
  UiPanel,
  UiRow,
} from '~/components/ui.js';

export default {
  layout: 'users',

  components: {
    FormResetPassword,
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
      reset: false,
      resetError: null,
    };
  },

  asyncData({ query }) {
    return {
      resetPasswordToken: query.token,
      userId: parseInt(query.user_id),
      invalid: !query.token || !query.user_id,
    };
  },

  methods: {
    onError(error) {
      this.resetError = error;
    },

    onReset() {
      this.resetError = null;
      this.reset = true;
    },
  },
};
</script>
