<template>
  <div :class="classes">
    <ui-image
      :src="src"
      :alt="alt"
      height="full"
    />
    <div
      v-if="withBreadcrumbs"
      class="absolute w-full top-0 left-0 bg-gradient-shadow-top h-full"
    >
      <container>
        <row>
          <column class="w-full">
            <breadcrumbs invert-color />
          </column>
        </row>
      </container>
    </div>
    <brand-image
      v-if="withBrandImage"
      :src="brand"
      height="12"
      :width="full ? '48' : 'auto'"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { isEmpty } from 'lodash';

import { UiImage } from '~/components/atoms';
import { Breadcrumbs } from '~/components/molecules';
import { Container, Row, Column } from '~/components/grid';
import BrandImage from './brand-image';

export default {
  components: {
    UiImage,
    Breadcrumbs,
    Container,
    Row,
    Column,
    BrandImage,
  },
  props: {
    src: VueTypes.oneOfType([String, Object]).def(''),
    alt: VueTypes.string.def(''),
    brand: VueTypes.object,
    withBreadcrumbs: Boolean,
    type: VueTypes.oneOf(['header', 'card']).def('header'),
    height: VueTypes.string.def(''),
    full: Boolean,
  },
  computed: {
    heightClass() {
      if (this.type === 'header') {
        return 'h-banner-sm lg:h-banner';
      }

      return this.height ? `h-${this.height}` : '';
    },
    classes() {
      return [
        'w-full gradient relative overflow-hidden',
        this.heightClass,
      ];
    },
    withBrandImage() {
      return !isEmpty(this.brand)
    }
  },
};
</script>
