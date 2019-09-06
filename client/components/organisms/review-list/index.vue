<template>
  <fragment>
    <row>
      <column class="w-full">
        <main-title type="secondary">{{ $t('components.review_list.title') }}</main-title>
      </column>
    </row>
    <row>
      <column class="w-full">
        <card class="pt-6">
          <vue-trustpilot
            identifier="reviewList"
            data-style-height="750px"
            data-style-width="100%"
            data-theme="light"
            data-reviewnumber="5"
            data-sku="5051644003570,5051644003587,1013"
            data-name="Spotify"
          />
        </card>
      </column>
    </row>
  </fragment>
</template>

<script>

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
};

</script>
