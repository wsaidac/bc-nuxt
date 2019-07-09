<template>
  <section class="cg-container cg-profile container container-margin">
    <ui-row>
      <ui-col :md="8">
        <sidebar-main />
      </ui-col>
      <ui-col :md="16">
        <ui-alert
          v-if="error"
          :description="$t(error)"
          type="error"
          @close="error = null"
        />
        <ui-alert
          v-if="message"
          :description="$t(message)"
          type="success"
          @close="message = null"
        />

        <ui-panel
          :title="$t('account.personal-details')"
          color="primary"
        >
          <ui-form-section :title="$t('account.your-login-details')">
            <ui-collapse
              ref="collapse"
              accordion
            >
              <ui-collapse-item
                :title="{
                  label: $t('account.account-email-address'),
                  value: currentUser && currentUser.email || '',
                  toggle: $t('account.change-email'),
                }"
                title-design="form-toggle"
              >
                <form-change-email
                  @cancel="onCancel"
                  @error="showError"
                  @submit="showMessage('change-email-requested')"
                />
              </ui-collapse-item>
              <ui-collapse-item
                :title="{
                  label: $t('account.password'),
                  value: '********',
                  toggle: $t('account.change-password'),
                }"
                title-design="form-toggle"
              >
                <form-change-password
                  @cancel="onCancel"
                  @error="showError('change-password-error')"
                  @submit="showMessage('change-password-submit')"
                />
              </ui-collapse-item>
            </ui-collapse>
          </ui-form-section>
          <ui-form-section :title="$t('account.personal-details')">
            <form-personal-details v-model="personalDetails" />
          </ui-form-section>
          <ui-form-section :title="$t('account.address-details')">
            <form-address-details v-model="addressDetails" />
          </ui-form-section>
          <ui-form-section>
            <ui-button
              type="primary"
              class="cg-profile__submit"
              native-type="submit"
              @click="saveDetails"
            >
              {{ $t('account.save') }}
            </ui-button>
          </ui-form-section>
        </ui-panel>
      </ui-col>
    </ui-row>
  </section>
</template>

<script>
import SidebarMain from '~/components/sidebar/main';
import FormChangeEmail from '~/components/form/change-email';
import FormChangePassword from '~/components/form/change-password';
import FormPersonalDetails from '~/components/form/personal-details';
import FormAddressDetails from '~/components/form/address-details';

import {
  UiAlert,
  UiButton,
  UiCol,
  UiCollapse,
  UiCollapseItem,
  UiFormSection,
  UiPanel,
  UiRow,
} from '~/components/ui';

import { mapGetters } from 'vuex';
import { pick } from 'lodash';

function pickPersonalDetails(user) {
  return pick(user.currentPersonalData, [
    'firstName',
    'lastNamePrefix',
    'lastName',
    'birthDate',
    'gender',
    'phone',
    'phonePrefix',
    'phoneCountryIso',
  ]);
}

function pickAddressDetails(user) {
  return pick(user.currentPersonalData, [
    'address',
    'houseNumber',
    'zipCode',
    'city',
  ]);
}

export default {
  layout: 'users',

  components: {
    SidebarMain,
    FormChangeEmail,
    FormChangePassword,
    FormPersonalDetails,
    FormAddressDetails,
    UiAlert,
    UiButton,
    UiCol,
    UiCollapse,
    UiCollapseItem,
    UiFormSection,
    UiPanel,
    UiRow,
  },

  data() {
    return {
      error: null,
      message: null,
    };
  },

  computed: {
    ...mapGetters('auth', ['currentUser']),

    personalData() {
      return {
        ...this.personalDetails,
        ...this.addressDetails,
      };
    },
  },

  async asyncData({ app }) {
    const { data: { currentUser: { user } } } = await app.$query('currentPersonalData');
    return {
      personalDetails: pickPersonalDetails(user),
      addressDetails: pickAddressDetails(user),
    };
  },

  middleware: ['auth'],

  methods: {
    showMessage(message) {
      this.message = message;
      this.$refs.collapse.collapseAll();
    },

    showError(error) {
      this.error = error;
      // this.$refs.collapse.collapseAll();
    },

    onCancel() {
      this.$refs.collapse.collapseAll();
    },

    async saveDetails() {
      const { errors } = await this.$mutation('createPersonalData', {
        personalData: this.personalData,
      });
      if (errors.length > 0) {
        this.error = errors[0].message;
        return;
      }
      this.showMessage(this.$t('account.personal-data-submit'));
    },
  },
};
</script>

<style lang="scss">
.cg-profile {
  .el-collapse {
    margin-bottom: 25px;
  }

  .el-alert {
    margin-bottom: 25px;
  }

  .el-collapse-item {
    background: #eaf2fa;
    border: 1px solid rgb(0, 123, 184);
    padding: 10px;

    &__header {
      background: transparent;
      border: none;
      font-size: $font-size-base;
    }

    &__wrap {
      background: transparent;
      border: none;
    }

    &__content {
      color: $body-color;
      font-size: $font-size-base;
      line-height: $line-height-base;
      padding: 25px 0 0 0;
    }

    & + .el-collapse-item {
      margin-top: 4px;
    }
  }

  .ui-collapse-item {
    &__title-form-toggle {
      line-height: 24px;
      position: relative;
      width: 100%;

      .label {
        color: $black;
        font-size: $font-size-h6;
      }

      .value {
        color: $gray-500;
      }

      .toggle {
        color: $link-color;
        line-height: 48px;

        @include position(absolute, 0 0 null null);

        .is-active & {
          color: var(--gray-800);
        }

        @include media-breakpoint-down("sm") {
          display: none;
        }
      }
    }
  }
}
</style>
