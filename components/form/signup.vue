<template>
  <ui-form
    class="form-signup"
    @submit="register"
  >
    <ui-form-item
      :label="$t('email-address')"
      required
    >
      <ui-input
        v-model="user.email"
        :placeholder="$t('email-address')"
        type="email"
      />
    </ui-form-item>

    <ui-form-item
      :label="$t('password')"
      required
    >
      <ui-input
        v-model="user.password"
        :placeholder="$t('password')"
        :type="passwordInputType"
      />
    </ui-form-item>

    <ui-form-item
      :label="$t('repeat-password')"
      required
    >
      <ui-input-password
        v-model="user.passwordConfirmation"
        @toggle-password="togglePassword"
      />
    </ui-form-item>
    <ui-form-item>
      <ui-button
        block
        type="primary"
        native-type="submit"
      >
        {{ $t('secure-signup') }}
        <ui-icon icon="arrow-right" />
      </ui-button>
    </ui-form-item>
    <small v-html="$t('agree-to-terms')" />
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
    register() {
      console.log('hi');
    },
  },

  // methods: {
  //   async register() {
  //     this.$v.$touch();
  //     if (!this.$v.$invalid) {
  //       const { user } = await this.$m('register', this.user);
  //       if (this.$graphQLErrors.length > 0) {
  //         this.$graphQLErrors = monkeyPatchPaths(this.$graphQLErrors);
  //         this.$emit('error', this.$graphQLErrors[0].message);
  //       } else {
  //         this.$emit('submit', { email: user.email });
  //       }
  //     }
  //   },
  // },
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
