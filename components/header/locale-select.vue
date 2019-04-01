<template>
  <ui-dialog
    class="header-locale-select"
    :title="$t('country_select.title')"
    :showdialog="showdialog"
    @hideDialog="$emit('hideDialog')"
  >
    <p
      class="locale-select__desc"
      v-text="$t('country_select.description')"
    />
    <ui-select v-model="localeSelected">
      <span
        slot="prefix"
        :class="`flag-icon flag-icon--medium flag-icon-${selectedCountryFlag}`"
      />
      <el-option
        v-for="item in $i18n.locales"
        :key="item.code"
        :label="item.displayName"
        :value="item.code"
      >
        <span :class="`flag-icon flag-icon--bordered flag-icon--medium flag-icon-${item.name.toLowerCase()}`" />
        {{ item.displayName }}
      </el-option>
    </ui-select>
    <ui-button
      slot="footer"
      type="primary"
      native-type="button"
      class="header-locale-select__button"
      @click="changeLocale()"
    >
      {{ $t('country_select.button_name') }}
    </ui-button>
  </ui-dialog>
</template>

<script>
import ElOption from 'element-ui/lib/option.js';
import { UiSelect, UiDialog, UiButton } from '~/components/ui.js';

import flags from '~/assets/flags.js';

export default {
  components: {
    ElOption,
    UiSelect,
    UiDialog,
    UiButton,
  },

  props: {
    showdialog: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      localeSelected: this.$i18n.locale,
    };
  },

  computed: {
    selectedCountryFlag() {
      return this.localeSelected.slice(3);
    },
  },

  methods: {
    itemFlag(name) {
      return flags[name.toLowerCase()];
    },
    changeLocale() {
      this.$emit('hideDialog');
      if (this.$i18n.locale !== this.localeSelected) {
        this.$store.dispatch('context/changeContext', this.localeSelected);
        this.$router.push(`/${this.localeSelected}/`);
      }
    },
  },
};
</script>

<style lang="scss">
.header-locale-select {
  .el-dialog {
    border-radius: 0;
    box-shadow: 0 0 40px #000;
    max-width: 100%;
  }

  .locale-select__desc {
    color: #000;
    margin-bottom: 20px;
  }

  .dialog-footer {
    button {
      display: inline-block;
    }
  }

  &__button {
    background: #ffea6b;
    border: 2px solid $black;
    color: $black;

    &:hover {
      background: $black !important;
      border: 2px solid $black;
      color: $white;
    }
  }

  .el-input__inner {
    border-radius: 0;
    padding-left: 50px;
  }

  .el-input__prefix {
    left: 10px;
    top: 9px;
  }

  .el-button {
    display: block;
    margin: 0 auto;
  }

  &__selected-flag {
    width: 40px;
  }

  &__dropdown-img {
    height: 20px;
    margin-right: 10px;
    width: 40px;

    @include position(relative, 6px 0 0 0);
  }
}

.flag-icon {
  margin-right: 5px;
  vertical-align: middle;
}
</style>
