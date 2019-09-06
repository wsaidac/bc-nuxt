<template>
  <div
    role="button"
    tabindex="0"
    class="cursor-pointer inline-block"
    :aria-label="$t('country_select.title')"
    @click.stop="$emit('locale:click')"
  >
    <p
      aria-hidden="true"
      class="hover:underline"
    >
      <flag
        :country="country.name"
        class="mr-1 leading-normal"
      />
      {{ country.name }}
    </p>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { Flag } from '~/components/atoms';

export default {
  components: {
    Flag,
  },
  props: {
    country: VueTypes.object.def({}),
  },
};

</script>
