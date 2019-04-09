<template>
  <ui-form
    class="form-login"
    @submit="login"
  >
    <ui-form-item
      :label="$t('account.email-address')"
      :error="$error('email')"
      required
    >
      <ui-input
        v-model="$v.user.email.$model"
        :placeholder="$t('account.email-address')"
        type="email"
      />
    </ui-form-item>

    <ui-form-item
      :label="$t('account.password')"
      :error="$error('password')"
      required
    >
      <ui-input-password v-model="$v.user.password.$model" />
    </ui-form-item>

    <ui-form-item>
      <ui-button
        block
        type="primary"
        native-type="submit"
      >
        {{ $t('account.login.title') }}
        <ui-icon icon="arrow-right" />
      </ui-button>
    </ui-form-item>

    <small>
      <nuxt-link
        :to="localePath('sessions-request-reset')"
        v-text="$t('account.lost-password')"
      />
    </small>
  </ui-form>
</template>

<script>
import validate from '~/mixins/validate';
import {
  UiButton, UiForm, UiFormItem, UiIcon, UiInput,
} from '~/components/ui.js';

import UiInputPassword from '~/components/ui/input-password';

export default {
  name: 'FormLogin',

  components: {
    UiButton,
    UiForm,
    UiFormItem,
    UiIcon,
    UiInput,
    UiInputPassword,
  },

  mixins: [validate('user', ['email', 'password'])],

  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    async login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const { data, errors } = await this.$mutate('login', this.user);
        console.log(errors);
        if (errors.length > 0) {
          this.$emit('error', `account.${errors[0].message}`);
        } else {
          this.$store.commit('auth/setCurrentUser', data.login);
          this.$router.push(this.localePath('account-order-history'));
        }
      }
    },
  },
};
</script>

<style lang="scss">
.form-login {
  padding-top: 15px;

  .el-input-group__append {
    background: $white;

    .el-button .ui-icon {
      line-height: 20px;
    }
  }
}
</style>
