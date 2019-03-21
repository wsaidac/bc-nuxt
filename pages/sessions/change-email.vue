<template>
  <section class="cg-confirm">
    <ui-row v-if="error">
      <ui-col :lg="{span: 12, offset: 6}">
        <ui-message :title="$t('invalid')">
          <p v-text="$t(error)" />
        </ui-message>
      </ui-col>
    </ui-row>

    <ui-row v-else>
      <ui-col :lg="{span: 12, offset: 6}">
        <ui-message :title="$t('account-confirmed')">
          <i18n
            path="your-email-is-changed"
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
          {{ $t('go-to-login') }}
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
  components: {
    UiButton,
    UiCol,
    UiIcon,
    UiMessage,
    UiRow,
  },

  async asyncData({ app, query }) {
    const {
      data: { user },
      errors,
    } = await app.$mutate('changeEmail', { userId: query.user_id, confirmationToken: query.token });
    if (errors.length > 0) {
      return { error: errors[0].message };
    }
    return { user, error: null };
  },
};
</script>
