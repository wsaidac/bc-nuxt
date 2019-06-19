<template>
  <section class="cg-container cg-request-new-token container container-margin">
    <ui-alert
      v-if="resetError"
      :title="$t('account.request_unlock.error_title')"
      :description="$t(resetError)"
      type="error"
      @close="resetError = null"
    />
    <ui-row>
      <ui-col :lg="{ span: 16, offset: 3 }">
        <div v-if="requested">
          <ui-message :title="$t('account.account-unlock-sent')">
            <p v-text="$t('account.unlock-token-sent')" />
            <i18n
              path="account.email-sent-to"
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
          :title="$t('account.request-unlock-help')"
        >
          <form-request-token
            @submit="onRequest"
            @error="onError"
          />
        </ui-panel>
      </ui-col>
    </ui-row>
  </section>
</template>

<script>
import FormRequestToken from '~/components/form/request-token';
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
    FormRequestToken,
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

  middleware: ['usps'],
};
</script>
