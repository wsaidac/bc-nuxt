<template>
  <ui-form
    class="form-reset-password"
    @submit="resetPassword"
  >
    <ui-form-item
      :label="$t('account.password')"
      :error="$error('password')"
      required
    >
      <ui-input
        v-model="$v.user.password.$model"
        :placeholder="$t('account.password')"
        :type="passwordInputType"
      />
    </ui-form-item>

    <ui-form-item
      :label="$t('account.repeat-password')"
      :error="$error('passwordConfirmation')"
      required
    >
      <ui-input-password
        v-model="$v.user.passwordConfirmation.$model"
        :error="$error('passwordConfirmation')"
        :label="$t('account.repeat-password')"
        @toggle-password="togglePassword"
      />
    </ui-form-item>

    <ui-form-item>
      <ui-button
        block
        type="primary"
        native-type="submit"
      >
        {{ $t('account.reset-password') }}
        <ui-icon icon="arrow-right" />
      </ui-button>
    </ui-form-item>
  </ui-form>
</template>

<script>
import validate from '~/mixins/validate';
import togglePassword from '~/mixins/toggle-password';
import {
  UiButton, UiForm, UiFormItem, UiIcon, UiInput, UiInputPassword,
} from '~/components/ui.js';

export default {
  name: 'FormResetPassword',

  components: {
    UiButton,
    UiForm,
    UiFormItem,
    UiIcon,
    UiInput,
    UiInputPassword,
  },

  mixins: [validate('user', ['password', 'passwordConfirmation']), togglePassword],

  props: {
    resetPasswordToken: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      user: {
        password: '',
        passwordConfirmation: '',
      },
    };
  },

  methods: {
    async resetPassword() {
      const { resetPasswordToken, userId } = this;
      const { data, errors } = await this.$mutate('resetPassword', { resetPasswordToken, userId, ...this.user });
      if (errors.length > 0) {
        this.$emit('error', `account.${errors[0].message}`);
      } else {
        this.$store.commit('auth/setCurrentUser', data.resetPassword);
        this.$emit('submit');
      }
    },
  },
};
</script>

<style lang="scss">
.form-reset-password {
  & > p {
    margin-top: -10px;
  }
}
</style>
