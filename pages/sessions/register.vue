<template>
  <section class="cg-register container container-margin">
    <ui-alert
      v-if="signupError"
      :title="$t('account.registerError.title')"
      :description="$t(signupError)"
      type="error"
      @close="signupError = null"
    />
    <ui-row v-if="signedUp">
      <ui-col
        :md="{span: 18, offset: 3}"
        :xl="{span: 12, offset: 6}"
      >
        <ui-message :title="$t('account.account-created')">
          <i18n
            path="validation-was-send"
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
      <ui-col :md="{span: 12, offset: 6}">
        <ui-panel :title="$t('account.create-new-account')">
          <form-signup
            @submit="onSignup"
            @error="onError"
          />
        </ui-panel>
      </ui-col>
    </ui-row>
  </section>
</template>

<script>
import FormSignup from '~/components/form/signup';
import {
  UiAlert, UiButton, UiCol, UiMessage, UiIcon, UiPanel, UiRow,
} from '~/components/ui.js';

export default {
  components: {
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
      signupError: null,
    };
  },

  methods: {
    onSignup({ email }) {
      this.signedUp = true;
      this.email = email;
    },

    onError(error) {
      this.signupError = error;
    },

    tryAgain() {
      this.signedUp = false;
    },
  },
};
</script>

<style lang="scss">
.cg-register {
  & > .el-row > .el-col {
    margin-top: 20px;
  }
}
</style>
