<template>
  <div>
    <banner-image
      :src="image"
      :brand="logo"
      with-breadcrumbs
      full
    />
    <div class="bg-white py-6">
      <container>
        <row>
          <column class="w-full">
            <main-title>{{ title }}</main-title>
          </column>
        </row>
        <row>
          <column class="w-full md:w-1/3">
            <div class="bg-success p-4">TrustPilot widget</div>
          </column>
        </row>
      </container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VueTypes from 'vue-types';
import { isEmpty, get } from 'lodash';

import { BannerImage, MainTitle } from '~/components/molecules';
import { Container, Row, Column } from '~/components/grid';

export default {
  components: {
    BannerImage,
    MainTitle,
    Container,
    Row,
    Column,
  },
  props: {
    title: VueTypes.string.def(''),
    banner: VueTypes.object.def({}),
    logo: VueTypes.object.def({}),
  },
  computed: {
    ...mapGetters('shared', ['header']),
    image() {
      return !isEmpty(this.banner) ? this.banner : get(this.header, 'image', {});
    },
  },
};

</script>
