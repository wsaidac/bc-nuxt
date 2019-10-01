<template>
  <div class="rounded border border-gray bg-white">
    <label
      v-for="(method, index) in paymentMethods"
      :key="index"
      :for="method.id"
      class="flex border-b last:border-0 border-gray p-3 items-center"
    >
      <input
        :id="method.id"
        v-model="picked"
        :value="method.id"
        name="picked"
        type="radio"
        class="mr-6"
      >
      <ui-image
        :src="method.image"
        width="10"
        height="10"
      />
      <div class="ml-6">
        <p>{{ method.name }}</p>
        <p class="text-xs text-gray-dark">{{ method.serviceFee }}</p>
      </div>
    </label>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { UiImage } from '~/components/atoms';

export default {
  components: {
    UiImage,
  },
  props: {
    paymentMethods: VueTypes.array.def([]),
  },
  data() {
    return {
      picked: '',
    };
  },
};

</script>
