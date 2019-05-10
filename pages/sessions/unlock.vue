<template>
  <section class="cg-container cg-confirm-new-token container container-margin">
    <ui-row v-if="error">
      <ui-col :lg="{span: 12, offset: 6}">
        <ui-message :title="$t('account.invalid')">
          <p v-text="$t(error)" />
        </ui-message>
        <ui-button
          type="primary"
          justify
          @click="$router.push(localePath('sessions-login'))"
        >
          {{ $t('account.go-to-login') }}
          <ui-icon icon="arrow-right-open" />
        </ui-button>
      </ui-col>
    </ui-row>

    <ui-row v-else>
      <ui-col :lg="{span: 12, offset: 6}">
        <ui-message :title="$t('account.account-unlocked')">
          <i18n
            path="account.your-account-is-unlocked"
            tag="p"
          >
            <strong place="email">
              {{ user.email }}
            </strong>
          </i18n>
        </ui-message>
        <ui-button
          type="primary"
          justify
          @click="$router.push(localePath('sessions-login'))"
        >
          {{ $t('account.go-to-login') }}
          <ui-icon icon="arrow-right-open" />
        </ui-button>
      </ui-col>
    </ui-row>
  </section>
</template>

<script>
import {
  UiButton, UiCol, UiIcon, UiMessage, UiRow,
} from '~/components/ui';

export default {
  layout: 'users',

  components: {
    UiButton,
    UiCol,
    UiIcon,
    UiMessage,
    UiRow,
  },

  async asyncData({ app, query }) {
    const { data: { user }, errors } = await app.$mutate('unlock', {
      userId: query.user_id,
      unlockToken: query.token,
    });
    if (errors.length > 0) {
      // return { error: `account.${errors[0].message}` };
      return { error: `account.${'unknown_user'}` };
    }
    return { user: { email: 'hi' } };
  },

  middleware: ['usps'],
};
</script>
