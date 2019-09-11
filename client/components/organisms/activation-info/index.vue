<template>
  <fragment>
    <row>
      <column class="w-full">
        <main-title type="secondary">{{ $t("components.activation_info.title") }}</main-title>
      </column>
    </row>
    <row>
      <column class="w-full">
        <info-card :info="info" />
      </column>
    </row>
  </fragment>
</template>

<script>
import VueTypes from 'vue-types';

import { Row, Column } from '~/components/grid';
import { MainTitle, InfoCard } from '~/components/molecules';


export default {
  components: {
    Row,
    Column,
    MainTitle,
    InfoCard,
  },
  props: {
    info: VueTypes.object.def({}),
  },
};

</script>
