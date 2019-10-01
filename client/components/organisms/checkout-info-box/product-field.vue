<template>
  <div class="flex pb-4 w-full">
    <ui-image
      width="28"
      height="auto"
      class=" hidden md:block border border-gray-light"
      contain
      :src="product.image"
    />
    <div class="pl-4 flex flex-col flex-1">
      <ui-title
        class="flex justify-between"
        type="h4"
      >
        <span>{{ product.title }}</span>
        <span>{{ product.value }}</span>
      </ui-title>
      <p class="flex justify-between flex-1 text-gray-black mb-4">
        <span>{{ $t('account.orders.service-costs') }}</span>
        <span>{{ product.serviceFee }}</span>
      </p>
      <ui-select
        width="24"
        :initial-value="1"
        :options="amounts"
        @select="onAmountChange"
      />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import {
  UiImage, UiTitle, UiSelect,
} from '~/components/atoms';

export default {
  components: {
    UiImage,
    UiSelect,
    UiTitle,
  },
  props: {
    product: VueTypes.shape({
      id: VueTypes.oneOfType([Number, String]),
      value: VueTypes.string,
      serviceFee: VueTypes.string,
      image: VueTypes.oneOfType([Object, String]),
      title: VueTypes.string,
    }).loose,
    amounts: VueTypes.arrayOf(Object),
  },
  methods: {
    onAmountChange(selected) {
      this.$emit('checkout-product:select', selected);
    },
  },
};

</script>
