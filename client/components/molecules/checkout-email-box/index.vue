<template>
  <card>
    <ui-title type="h3">{{ $t("renasci.molecules.checkout_email_box.title") }}</ui-title>
    <p class="py-4">{{ $t("renasci.molecules.checkout_email_box.description") }}</p>
    <ui-input
      v-model="$v.email.$model"
      :has-error="$v.email.$error"
      :is-focused="isFocused"
      :is-dirty="$v.email.$dirty"
      :label="$t('renasci.molecules.checkout_email_box.input_label')"
      autocomplete="off"
      @blur="onInputBlur"
      @focus="onInputFocus"
    />
  </card>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

import { UiTitle, UiInput, Card } from '~/components/atoms';

export default {
  components: {
    UiInput,
    UiTitle,
    Card,
  },
  data() {
    return {
      email: '',
      isFocused: false,
    };
  },
  methods: {
    onInputBlur() {
      this.isFocused = false;
    },
    onInputFocus() {
      this.isFocused = true;
      this.$v.email.$reset();
    },
  },
  validations: {
    email: {
      required,
      email,
    },
  },
};

</script>
