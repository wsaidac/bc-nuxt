<template>
  <div class="footer-payment-methods">
    <ui-icon icon="protected-shield" />
    <p>
      <strong>Safely</strong> order with:
    </p>
    <ul class="footer-payment-methods__list">
      <li
        v-for="method in methods"
        :key="method.name"
        class="footer-payment-methods__item"
      >
        <nuxt-link
          :title="`Safely order with ${method.name}`"
          to="/payment-methods"
        >
          <img
            :alt="method.name"
            :src="method.image.sourceUrl"
          >
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';

export default {
  name: 'FooterPaymentMethods',

  components: {
    UiIcon,
  },

  props: {
    methods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.footer-payment-methods {
  align-items: center;
  border-right: 1px solid $gray-400;
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  .ui-icon {
    font-size: 32px;
    margin-right: 5px;
  }

  p {
    font-size: $font-size-h4;
    margin: 0;
    white-space: nowrap;
  }

  &__list {
    align-items: center;
    display: flex;
    height: 40px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin: 0 10px;
    width: 40px;

    a {
      display: block;
    }
  }
}
</style>
