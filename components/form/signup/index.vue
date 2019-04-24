<template>
  <ui-form
    class="form-signup"
    @submit="register"
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
        @toggle-password="togglePassword"
      />
    </ui-form-item>
    <ui-form-item>
      <ui-button
        block
        type="primary"
        native-type="submit"
      >
        {{ $t('account.secure-signup') }}
        <ui-icon icon="arrow-right" />
      </ui-button>
    </ui-form-item>
    <small v-html="$t('account.agree-to-terms')" />
  </ui-form>
</template>

<script>
import validate from '~/mixins/validate';
import togglePassword from '~/mixins/toggle-password';
import UiInputPassword from '~/components/ui/input-password';

import {
  UiForm, UiFormItem, UiButton, UiInput, UiIcon,
} from '~/components/ui.js';

/*
  Set correct error path, because GraphQL stitching swallows the original path field
  Issue: https://github.com/apollographql/graphql-tools/issues/743
*/
function monkeyPatchPaths(errors) {
  return errors.map((error) => {
    if (error.message === 'required' || error.message === 'uniqueness') {
      error.path = ['user', 'email'];
    }
    return error;
  });
}

export default {
  name: 'FormSignup',

  components: {
    UiForm,
    UiFormItem,
    UiButton,
    UiInput,
    UiIcon,
    UiInputPassword,
  },

  mixins: [validate('user', ['email', 'password', 'passwordConfirmation']), togglePassword],

  data() {
    return {
      user: {
        email: '',
        password: '',
        passwordConfirmation: '',
      },
    };
  },

  methods: {
    async register() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const { user } = await this.$m('register', this.user);
        if (this.$graphQLErrors.length > 0) {
          this.$graphQLErrors = monkeyPatchPaths(this.$graphQLErrors);
          console.log(this.$graphQLErrors);
          this.$emit('error', this.$graphQLErrors[0].message);
        } else {
          this.$emit('submit', { email: user.email });
        }
      }
    },
  },
};
</script>

<style lang="scss">
.form-signup {
  padding-top: 15px;

  .el-input-group__append {
    background: $white;

    .el-button .ui-icon {
      line-height: 20px;
    }
  }
}
</style>
