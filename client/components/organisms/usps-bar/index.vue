<template>
  <row class="my-8">
    <column class="w-full">
      <div class="border border-gray p-4 rounded-lg bg-white">
        <usps-list
          class="justify-center"
          :list="usps.items"
        />
      </div>
    </column>
  </row>
</template>

<script>
import { mapGetters } from 'vuex';
import VueTypes from 'vue-types';
import { UspsList } from '~/components/molecules';
import { Row, Column } from '~/components/grid';

export default {
  components: {
    UspsList,
    Row,
    Column,
  },
  computed: {
    ...mapGetters('shared', ['usps']),
  },
};

</script>
