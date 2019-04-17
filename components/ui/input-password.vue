<template>
  <ui-input
    v-model="shadowValue"
    :placeholder="$t('password')"
    :type="passwordInputType"
  >
    <ui-button
      slot="append"
      :icon="passwordVisible ? 'eye' : 'eye-open'"
      native-type="button"
      @click="togglePassword"
    />
  </ui-input>
</template>

<script>
import togglePassword from '~/mixins/toggle-password';
import UiInput from './input.vue';
import UiButton from './button.vue';

export default {
  name: 'UiInputPassword',

  components: {
    UiInput,
    UiButton,
  },

  mixins: [togglePassword],

  props: {
    value: {
      type: String,
      required: true,
    },
  },

  computed: {
    shadowValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
