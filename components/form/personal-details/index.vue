<template>
  <ui-form
    class="form-personal-details"
    @submit="onSubmit"
  >
    <ui-row>
      <ui-col :md="12">
        <ui-form-item :label="$t('first-name')">
          <ui-input
            v-model="firstName"
            :placeholder="$t('first-name')"
          />
        </ui-form-item>
      </ui-col>
      <ui-col :md="12">
        <ui-form-item :label="$t('last-name')">
          <ui-input
            v-model="lastName"
            :placeholder="$t('last-name')"
            class="input-help"
          />
        </ui-form-item>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :md="12">
        <ui-form-item>
          <template slot="label">
            {{ $t('birthdate') }}
          </template>
          <ui-date-picker v-model="birthDate" />
        </ui-form-item>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :md="24">
        <ui-form-item :label="$t('gender')">
          <ui-radio-group v-model="gender">
            <ui-radio-button
              :label="$t('male')"
              value="male"
            />
            <ui-radio-button
              :label="$t('female')"
              value="female"
            />
            <ui-radio-button
              :label="$t('i-prefer-not-to-say')"
              value="undefined"
            />
          </ui-radio-group>
        </ui-form-item>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :md="12">
        <ui-form-item :label="$t('phone-number')">
          <ui-input-phone-number v-model="phoneNumber" />
        </ui-form-item>
      </ui-col>
    </ui-row>
  </ui-form>
</template>

<script>
import { pick } from 'lodash';
import objectModel from '~/mixins/object-model';
import {
  UiCol,
  UiDatePicker,
  UiForm,
  UiFormItem,
  UiInput,
  UiInputPhoneNumber,
  UiRadioButton,
  UiRadioGroup,
  UiRow,
} from '~/components/ui.js';

export default {
  components: {
    UiCol,
    UiDatePicker,
    UiForm,
    UiFormItem,
    UiInput,
    UiInputPhoneNumber,
    UiRadioButton,
    UiRadioGroup,
    UiRow,
  },

  mixins: [
    objectModel([
      'firstName',
      'lastName',
      'lastNamePrefix',
      'birthDate',
      'gender',
      'phone',
      'phonePrefix',
      'phoneCountryIso',
      'countryIso',
    ]),
  ],

  computed: {
    phoneNumber: {
      get() {
        return pick(this, ['phone', 'phonePrefix', 'phoneCountryIso']);
      },

      set(phoneNumber) {
        this.$emit('input', Object.assign({}, this.value, phoneNumber));
      },
    },
  },

  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>
