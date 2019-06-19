<template>
  <div class="ui-input-phone-number">
    <ui-input
      v-model="phonePrefix"
      class="ui-input-phone-number__prefix"
    >
      <div slot="prepend">
        <span :class="flagClasses" />
        <span>+</span>
      </div>
    </ui-input>
    <ui-input
      v-model="phone"
      class="ui-input-phone-number__phone"
      type="tel"
    />
  </div>
</template>

<script>
import { find, get } from 'lodash';
import UiInput from './input';
import objectModel from '~/mixins/object-model';
import Countries from '~/assets/countries.json';

const fetchIsoByPhone = phoneCode => get(find(Countries, ['phone', phoneCode]), 'iso');

export default {
  name: 'UiInputPhoneNumber',

  components: {
    UiInput,
  },

  mixins: [objectModel(['phone'])],

  computed: {
    flagClasses() {
      return ['flag-icon', `flag-icon-${this.phoneCountryIso}`];
    },

    phonePrefix: {
      get() {
        return this.value.phonePrefix;
      },

      set(val) {
        const flag = (fetchIsoByPhone(val) || 'NL').toLowerCase();
        this.$emit(
          'input',
          Object.assign({}, this.value, {
            phonePrefix: val,
            phoneCountryIso: flag,
          }),
        );
      },
    },

    phoneCountryIso() {
      return this.value.phoneCountryIso || 'NL';
    },
  },
};
</script>

<style lang="scss">
.ui-input-phone-number {
  display: flex;

  .ui-input-phone-number__prefix {
    border-right: 0;
    width: 120px;

    span {
      font-size: 1.4em;
      padding-left: 5px;
    }
  }

  &__phone {
    .el-input__inner {
      border-bottom-left-radius: 0;
      border-left: 0;
      border-top-left-radius: 0;
    }
  }

  .el-input-group__prepend {
    background: transparent;
    border-radius: 0;
    border-right: none;
    padding-left: 10px;
    padding-right: 0;
    width: 40px;

    & + .el-input__inner {
      border-bottom-right-radius: 0;
      border-left: none;
      border-top-right-radius: 0;
      width: 60px;
    }
  }

  &__flag {
    vertical-align: bottom;

    @include size(28px, 24px);
  }
}
</style>
