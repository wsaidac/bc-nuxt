<template>
  <div
    class="m-4"
    itemscope
    itemtype="http://schema.org/Offer"
    itemprop="offers"
  >
    <div class="flex justify-between items-center mb-4">
      <ui-title
        type="h2"
        class="font-extrabold"
      >
        {{ $n(value, 'currency') }}
      </ui-title>
      <p class="text-gray-black text-right leading-none font-light text-xs lg:text-base">
        {{ `+ ${$n(serviceFee, 'currency')}` }}
        <br>
        {{ $t('account.orders.service-costs') }}
      </p>
    </div>
    <ui-button
      justify
      @click.prevent="$emit('product-card-cta:click')"
    >
      {{ $t('general.order-safely') }}
    </ui-button>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { UiTitle, UiButton } from '~/components/atoms';

export default {
  components: {
    UiTitle,
    UiButton,
  },
  props: {
    value: VueTypes.string.def(''),
    serviceFee: VueTypes.string.def(''),
  },
};

</script>
