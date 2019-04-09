<template>
  <section class="cg-login container container-margin">
    <ui-alert
      v-if="loginError"
      :title="$t('account.loginError.title')"
      :description="$t(loginError)"
      type="error"
      @close="loginError = null"
    />
    <ui-alert
      v-if="signUpError"
      :title="$t('account.signupError.title')"
      :description="$t(signUpError)"
      type="error"
      @close="signUpError = null"
    />
    <ui-row v-if="signedUp">
      <ui-col
        :md="{span: 18, offset: 3}"
        :xl="{span: 12, offset: 6}"
      >
        <ui-message :title="$t('account.account-created')">
          <i18n
            path="account.validation-send"
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
          <span>
            {{ $t('account.try-again') }}
          </span>
          <ui-icon icon="arrow-right-open" />
        </ui-button>
      </ui-col>
    </ui-row>

    <ui-row v-else>
      <ui-col
        :md="11"
        :lg="{span: 8, offset: 2}"
      >
        <ui-panel :title="$t('account.login.title')">
          <form-login @error="onError" />
        </ui-panel>
      </ui-col>

      <ui-col
        :md="{span: 12, offset: 1}"
        :lg="{span: 10, offset: 2}"
      >
        <ui-panel :title="$t('account.create-new-account')">
          <form-signup
            @submit="onSignup"
            @error="onSignupError"
          />
        </ui-panel>
      </ui-col>
    </ui-row>
  </section>
</template>

<script>
import FormLogin from '~/components/form/login';
import FormSignup from '~/components/form/signup';
import {
  UiAlert, UiButton, UiCol, UiMessage, UiIcon, UiPanel, UiRow,
} from '~/components/ui.js';

export default {
  components: {
    FormLogin,
    FormSignup,
    UiAlert,
    UiButton,
    UiCol,
    UiMessage,
    UiIcon,
    UiPanel,
    UiRow,
  },

  data() {
    return {
      signedUp: false,
      email: null,
      loginError: null,
      signUpError: null,
    };
  },

  methods: {
    onSignup({ email }) {
      this.signedUp = true;
      this.email = email;
    },

    onError(error) {
      this.loginError = error;
    },

    onSignupError(error) {
      switch (error) {
        case 'uniqueness':
          this.signUpError = 'account.request_change_email.invalid';
          break;

        default:
          this.signUpError = error;
          break;
      }
    },

    tryAgain() {
      this.signedUp = false;
    },
  },
};
</script>

<style lang="scss">
.cg-login {
  & > .el-row > .el-col {
    margin-top: 20px;
  }
}
</style>
