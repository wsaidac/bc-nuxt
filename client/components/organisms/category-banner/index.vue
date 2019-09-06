<template>
  <div>
    <banner-image
      :src="image"
      :brand="categoryHeader.image"
      with-breadcrumbs
      full
    />
    <div class="bg-white py-6">
      <container>
        <row>
          <column class="w-full">
            <main-title>{{ categoryHeader.title }}</main-title>
          </column>
        </row>
        <row>
          <column class="w-full md:w-1/3">
            <vue-trustpilot
              identifier="categoryHeader"
              data-style-height="30px"
              data-style-width="178px"
              data-theme="light"
              data-sku="5051644003570,5051644003587,1013"
              data-name="Spotify"
            />
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
    categoryHeader: VueTypes.shape({
      title: VueTypes.string.def(''),
      banner: VueTypes.object.def({}),
      image: VueTypes.object.def({}),
    }).loose.def({}),
  },
  computed: {
    ...mapGetters('shared', ['header']),
    image() {
      const { banner } = this.categoryHeader;

      // if the category doesn't have a banner image, it will use the general rapido banner
      return !isEmpty(banner) ? banner : get(this, 'header.image', {});
    },
  },
};

</script>
