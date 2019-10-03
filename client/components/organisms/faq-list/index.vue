<template>
  <fragment>
    <row>
      <column class="w-full">
        <main-title type="secondary">
          {{ $t('renasci.organisms.faq_list.faq_all') }}
        </main-title>
      </column>
    </row>
    <row>
      <column class="w-full">
        <order-help-accordion :questions="questions" />
      </column>
    </row>
  </fragment>
</template>

<script>
import VueTypes from 'vue-types';
import { MainTitle, OrderHelpAccordion } from '~/components/molecules';
import { Row, Column } from '~/components/grid';

export default {
  components: {
    MainTitle,
    OrderHelpAccordion,
    Row,
    Column,
  },
  props: {
    questions: VueTypes.array.def([]),
  },
};

</script>
