<template>
  <div
    v-if="canInsertCode"
    class="my-4"
  >
    <ui-input
      v-model="code"
      :is-loading="isLoading"
      :is-succeeded="codeIsValid"
      :has-error="showError && showLink"
      :label="$t('pages.checkout.info_box.code_input.placeholder')"
      :disabled="showLink"
      autocomplete="off"
      uppercase
    />
    <ui-link
      v-if="showLink"
      @click="onResetCode"
    >
      {{ $t('pages.checkout.info_box.code_input.remove') }}
    </ui-link>
    <ui-button
      v-else
      :disable="!code.length"
      :loading="isLoading"
      @click="onHandleSubmit"
    >
      {{ $t('pages.checkout.info_box.code_input.use_button') }}
    </ui-button>
  </div>
  <ui-button
    v-else
    class="my-4"
    justify
    type="secondary"
    @click="canInsertCode = true"
  >
    {{ $t('pages.checkout.info_box.code_input.redeem_button') }}
  </ui-button>
</template>

<script>
import VueTypes from 'vue-types';
import {
  UiButton, UiInput, UiLink,
} from '~/components/atoms';

// @TODO: Delete this. It is just for examples.
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default {
  components: {
    UiButton,
    UiInput,
    UiLink,
  },
  props: {},
  data() {
    return {
      canInsertCode: false,
      code: '',
      showLink: false,
      showError: false,
      codeIsValid: false,
      isLoading: false,
    };
  },
  methods: {
    async onHandleSubmit() {
      // @TODO: add side effects, define the client/server behavior and add a correct validation
      this.isLoading = true;
      await delay(2000);
      if (this.isValidCode(this.code)) {
        console.log('try... catch ... submit...');
        this.codeIsValid = true;
      } else {
        this.showError = true;
      }

      this.isLoading = false;
      this.showLink = true;
    },
    // @TODO: Refactor using the correct action/side effect
    async onResetCode() {
      this.isLoading = true;
      await delay(1000);

      this.isLoading = false;
      this.code = '';
      this.showLink = false;
      this.codeIsValid = false;
      this.showError = false;
    },
    isValidCode(code) {
      return code === '1234';
    },
  },
};

</script>
