<template>
  <ui-form
    class="form-change-password"
    @submit="changePassword"
  >
    <ui-form-item
      :label="$t('current-password')"
      required
    >
      <ui-input
        v-model="user.oldPassword"
        :placeholder="$t('password')"
        :type="passwordInputType"
      />
    </ui-form-item>
    <ui-form-item
      :label="$t('new-password')"
      :error="$error('password')"
      required
    >
      <ui-input
        v-model="$v.user.password.$model"
        :placeholder="$t('new-password')"
        :type="passwordInputType"
      />
    </ui-form-item>
    <ui-form-item
      :label="$t('repeat-new-password')"
      required
    >
      <ui-input-password
        v-model="$v.user.passwordConfirmation.$model"
        :error="$error('passwordConfirmation')"
        :label="$t('repeat-new-password')"
        @toggle-password="togglePassword"
      />
    </ui-form-item>
    <ui-form-item>
      <ui-button
        type="tertiary"
        native-type="cancel"
        @click="cancel"
      >
        {{ $t('cancel') }}
      </ui-button>
      <ui-button
        type="tertiary"
        native-type="submit"
      >
        {{ $t('save') }}
      </ui-button>
    </ui-form-item>
  </ui-form>
</template>

<script>
import validate from '~/mixins/validate';
import togglePassword from '~/mixins/toggle-password';
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

  mixins: [validate('user', ['password', 'passwordConfirmation']), togglePassword],

  data() {
    return {
      user: {
        oldPassword: '',
        password: '',
        passwordConfirmation: '',
      },
    };
  },

  methods: {
    async changePassword() {
      const { errors } = await this.$mutate('changePassword', this.user);
      if (errors.length > 0) {
        this.$emit('error', errors[0].message);
      } else {
        this.$emit('submit', this.user);
      }
    },

    cancel() {
      this.user = {
        oldPassword: '',
        password: '',
        passwordConfirmation: '',
      };

      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss">
.form-change-password {
  max-width: 420px;
}
</style>
