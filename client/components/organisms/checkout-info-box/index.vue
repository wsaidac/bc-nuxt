<template>
  <card>
    <ui-title type="h4">{{ $t('pages.checkout.info_box.title') }}</ui-title>
    <divider
      type="small"
      class="my-4"
    />
    <product-field
      :product="product"
      :amounts="amounts"
      @checkout-product:select="onChangeQuantity"
    />
    <divider />
    <div class="py-4">
      <usps
        class="mb-4"
        :text="uspsText"
      />
      <usps
        v-for="(restriction, index) in restrictions"
        :key="index"
        :country="restriction.country"
        :text="restriction.message"
        :truncate="false"
      />
    </div>
    <divider />
    <discount-code-field />
    <divider />
    <ui-title
      type="h4"
      class="mt-4 flex justify-between"
    >
      <span class="font-normal">{{ $t('pages.checkout.info_box.subtotal_label') }}</span>
      <span>{{ subtotal }}</span>
    </ui-title>
    <div class="my-4 flex justify-between items-center">
      <ui-title type="h4"> {{ $t('pages.checkout.info_box.total_label') }}</ui-title>
      <ui-title type="h2">{{ total }}</ui-title>
    </div>
  </card>
</template>

<script>

import VueTypes from 'vue-types';
import { mapGetters } from 'vuex';
import { get } from 'lodash';

import {
  Card, UiTitle, Usps, Divider,
} from '~/components/atoms';
import DiscountCodeField from './discount-code-field';
import ProductField from './product-field';

export default {
  components: {
    Card,
    Divider,
    UiTitle,
    Usps,
    DiscountCodeField,
    ProductField,
  },
  props: {
    product: VueTypes.object.required,
    amounts: VueTypes.array.required,
    total: VueTypes.string,
    subtotal: VueTypes.string,
    restrictions: VueTypes.array.def([]),
  },
  computed: {
    ...mapGetters('shared', ['usps']),
    uspsText() {
      return get(this, 'usps.items[0].text', '');
    },
  },
  methods: {
    onChangeQuantity(option) {
      // @TODO: define method behavior
      console.log('on change quantity', option);
    },
  },
};

</script>
