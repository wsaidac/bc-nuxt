<template>
  <div :class="classes">
    <ui-image
      :src="src"
      :alt="alt"
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
      v-if="brand"
      :src="brand"
      height="12"
      :width="full ? '48' : 'auto'"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';
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
    brand: VueTypes.shape({
      src: VueTypes.oneOfType([String, Object]).def(''),
      alt: VueTypes.string.def(''),
    }).def(''),
    withBreadcrumbs: Boolean,
    height: VueTypes.oneOf([String, Number]).def(''),
    full: Boolean,
  },
  computed: {
    classes() {
      return [
        'w-full gradient relative overflow-hidden',
        { [`h-${this.height}`]: this.height },
      ];
    },
  },
};
</script>
