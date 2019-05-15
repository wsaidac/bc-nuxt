<template>
  <ui-form
    class="form-address-details"
    @submit="onSubmit"
  >
    <ui-row>
      <ui-col :md="9">
        <ui-form-item :label="$t('account.street')">
          <ui-input
            v-model="address"
            :placeholder="$t('account.street')"
          />
        </ui-form-item>
      </ui-col>
      <ui-col :md="6">
        <ui-form-item :label="$t('account.house-number')">
          <ui-input
            v-model="houseNumber"
            :placeholder="$t('account.house-number')"
          />
        </ui-form-item>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :md="6">
        <ui-form-item :label="$t('account.postal-code')">
          <ui-input
            v-model="zipCode"
            :placeholder="$t('account.postal-code')"
          />
        </ui-form-item>
      </ui-col>
      <ui-col :md="9">
        <ui-form-item :label="$t('account.city')">
          <ui-input
            v-model="city"
            :placeholder="$t('account.city')"
          />
        </ui-form-item>
      </ui-col>
    </ui-row>
  </ui-form>
</template>

<script>
import objectModel from '~/mixins/object-model';

import {
  UiCol,
  UiForm,
  UiFormItem,
  UiInput,
  UiRow,
} from '~/components/ui.js';

export default {
  components: {
    UiCol,
    UiForm,
    UiFormItem,
    UiInput,
    UiRow,
  },

  mixins: [objectModel(['address', 'houseNumber', 'zipCode', 'city'])],

  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>
