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
    <i18n
      path="account.agree-to-terms"
      tag="small"
    >
      <a
        v-for="(link, i) in links"
        :key="i"
        :place="`${link.linkName}-link`"
        :href="link.url"
        :title="link.title"
      >{{ link.title }}</a>
    </i18n>
  </ui-form>
</template>

<script>
import { mapGetters } from 'vuex';
import { get } from 'lodash';

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

  computed: {
    ...mapGetters('menus', ['footer']),
    links() {
      return ['generalConditions', 'privacyPolicy'].map(this.transformLink);
    },
  },

  methods: {
    transformLink(linkName) {
      const link = this.footer[linkName];
      if (!link || !link.slug) return null;

      return {
        linkName,
        title: get(link, 'href.title', linkName),
        url: `/${this.$i18n.locale}/${link.slug}`,
      };
    },
    async register() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const { user } = await this.$mutation('register', this.user);
        if (this.$graphQLErrors.length > 0) {
          this.$graphQLErrors = monkeyPatchPaths(this.$graphQLErrors);
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
