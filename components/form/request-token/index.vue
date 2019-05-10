<template>
  <ui-form
    class="form-request-reset"
    @submit="request"
  >
    <p v-text="$t('account.quick-unlocking')" />

    <ui-form-item
      :label="$t('account.enter-email-address')"
      :error="$error('email')"
      required
    >
      <ui-input
        v-model="$v.user.email.$model"
        :placeholder="$t('account.email-address')"
        type="email"
      />
    </ui-form-item>

    <ui-form-item>
      <ui-button
        class="pull-right"
        type="primary"
        native-type="submit"
      >
        {{ $t('account.continue') }}
        <ui-icon icon="arrow-right-open" />
      </ui-button>
    </ui-form-item>
  </ui-form>
</template>

<script>
import validate from '~/mixins/validate';
import {
  UiButton, UiForm, UiFormItem, UiIcon, UiInput,
} from '~/components/ui.js';

export default {
  name: 'FormRequestReset',

  components: {
    UiButton,
    UiForm,
    UiFormItem,
    UiIcon,
    UiInput,
  },

  mixins: [validate('user', ['email'])],

  data() {
    return {
      user: {
        email: '',
      },
    };
  },

  methods: {
    async request() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const { errors } = await this.$mutate('resendToken', { ...this.user, tokenType: 'UNLOCK' });
        console.log('errors', errors);
        if (errors.length > 0) {
          this.$emit('error', `account.${errors[0].message}`);
        } else {
          this.$emit('submit', this.user);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.form-request-reset {
  & > p {
    margin-top: -10px;
  }
}
</style>
