<template>
  <ui-form
    class="form-change-email"
    @submit="changeEmail"
  >
    <ui-form-item
      :label="$t('account.new-email-address')"
      :error="$error('unconfirmedEmail')"
      required
    >
      <ui-input
        v-model="$v.user.unconfirmedEmail.$model"
        :placeholder="$t('account.email-address')"
        type="email"
      />
    </ui-form-item>
    <ui-form-item
      :label="$t('account.repeat-email-address')"
      :error="$error('unconfirmedEmailConfirmation')"
      required
    >
      <ui-input
        v-model="$v.user.unconfirmedEmailConfirmation.$model"
        :placeholder="$t('account.email-address')"
        type="email"
      />
    </ui-form-item>

    <ui-form-item
      :label="$t('account.please-enter-password-for-confirmation')"
      required
    >
      <ui-input-password v-model="user.password" />
    </ui-form-item>

    <small class="form-change-email__lost-password">
      <nuxt-link
        :to="localePath('sessions-request-reset')"
        v-text="$t('account.lost-password-help')"
      />
    </small>
    <ui-form-item>
      <ui-button
        type="secondary"
        native-type="button"
        @click="cancel"
      >
        {{ $t('account.cancel') }}
      </ui-button>
      <ui-button
        type="secondary"
        native-type="submit"
      >
        {{ $t('account.save') }}
      </ui-button>
    </ui-form-item>
  </ui-form>
</template>

<script>
import validate from '~/mixins/validate';
import UiInputPassword from '~/components/ui/input-password.vue';

import {
  UiButton, UiForm, UiFormItem, UiInput,
} from '~/components/ui.js';

export default {
  components: {
    UiButton,
    UiForm,
    UiFormItem,
    UiInput,
    UiInputPassword,
  },

  mixins: [validate('user', ['unconfirmedEmail', 'unconfirmedEmailConfirmation'])],

  data() {
    return {
      user: {
        unconfirmedEmail: '',
        unconfirmedEmailConfirmation: '',
        password: '',
      },
    };
  },

  methods: {
    async changeEmail() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const { errors } = await this.$mutation('requestChangeEmail', this.user);

        if (errors.length > 0) {
          this.$emit('error', `account.${errors[0].message}`);
        } else {
          this.$emit('submit');
        }
      }
    },

    cancel() {
      this.user = {
        unconfirmedEmail: '',
        unconfirmedEmailConfirmation: '',
        password: '',
      };

      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss">
.form-change-email {
  max-width: 420px;

  &__lost-password {
    display: block;
    margin: -20px 0 22px;
    text-align: right;
  }
}
</style>
