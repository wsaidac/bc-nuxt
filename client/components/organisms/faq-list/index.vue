<template>
  <container>
    <row>
      <column class="w-full">
        <main-title type="secondary">
          {{ $t('account.faq.faq-all') }}
        </main-title>
      </column>
    </row>
    <row>
      <column class="w-full">
        <order-help-accordion :questions="questions" />
      </column>
    </row>
  </container>
</template>

<script>
import VueTypes from 'vue-types';
import { MainTitle, OrderHelpAccordion } from '~/components/molecules';
import { Container, Row, Column } from '~/components/grid';

export default {
  components: {
    MainTitle,
    OrderHelpAccordion,
    Container,
    Row,
    Column,
  },
  props: {
    questions: VueTypes.array.def([]),
  },
};

</script>
