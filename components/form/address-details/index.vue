<template>
  <ui-form
    class="form-address-details"
    @submit="onSubmit"
  >
    <ui-row>
      <ui-col :md="9">
        <ui-form-item :label="$t('street')">
          <ui-input
            v-model="address"
            :placeholder="$t('street')"
          />
        </ui-form-item>
      </ui-col>
      <ui-col :md="6">
        <ui-form-item :label="$t('house-number')">
          <ui-input
            v-model="houseNumber"
            :placeholder="$t('house-number')"
          />
        </ui-form-item>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :md="6">
        <ui-form-item :label="$t('postal-code')">
          <ui-input
            v-model="zipCode"
            :placeholder="$t('postal-code')"
          />
        </ui-form-item>
      </ui-col>
      <ui-col :md="9">
        <ui-form-item :label="$t('city')">
          <ui-input
            v-model="city"
            :placeholder="$t('city')"
          />
        </ui-form-item>
      </ui-col>
    </ui-row>
  </ui-form>
</template>

<script>
import objectModel from '~/mixins/object-model';

import {
  /* eslint-disable */
  UiCol,
  UiForm,
  UiFormItem,
  UiInput,
  UiRow,
  /* eslint-enable */
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
