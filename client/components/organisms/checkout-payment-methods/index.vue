<template>
  <card
    class="relative"
    :class="[{'opacity-25': disable }]"
  >
    <div
      v-if="disable"
      class="inset-0 absolute"
    />
    <ui-title type="h3">{{ $t("pages.checkout.payment_methods.title") }}</ui-title>
    <p class="py-4">{{ $t("pages.checkout.payment_methods.description") }}</p>
    <payment-methods-checklist
      v-if="paymentMethods.length"
      :payment-methods="paymentMethods"
    />
    <div
      v-else
      class="border border-gray p-4"
    >
      TODO: Empty state :)
    </div>
  </card>
</template>

<script>
import VueTypes from 'vue-types';

import { UiTitle, Card } from '~/components/atoms';
import { PaymentMethodsChecklist } from '~/components/molecules';

export default {
  components: {
    UiTitle,
    Card,
    PaymentMethodsChecklist,
  },
  props: {
    paymentMethods: VueTypes.array.def([]),
    disable: Boolean,
  },
};

</script>
