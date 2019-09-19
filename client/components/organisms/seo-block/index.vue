<template>
  <fragment>
    <row>
      <column class="w-full">
        <main-title type="secondary">{{ info.title }}</main-title>
      </column>
    </row>
    <row>
      <column class="w-full">
        <card space="none">
          <div class="px-4 pb-6 pt-0">
            <p
              class="mb-4 html-injected text-base"
              v-html="info.content"
            />
          </div>
        </card>
      </column>
    </row>
  </fragment>
</template>

<script>
import VueTypes from 'vue-types';

import { Row, Column } from '~/components/grid';
import { Card } from '~/components/atoms';
import { MainTitle } from '~/components/molecules';


export default {
  components: {
    Row,
    Column,
    MainTitle,
    Card,
  },
  props: {
    info: VueTypes.object.def({}),
  },
};

</script>
