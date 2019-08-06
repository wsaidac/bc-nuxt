<template>
  <nuxt-link
    :to="linkTo"
    :title="linkTitle"
  >
    <card class="hover:border-gray-dark">
      <div class="flex flex-col items-center">
        <icon
          icon="hole"
          color="gray-light"
          size="ls"
        />
        <ui-image
          :src="image"
          :alt="image.alt"
        />
        <div class="h-10 flex items-center">
          <ui-title type="h4">{{ title }}</ui-title>
        </div>
      </div>
    </card>
  </nuxt-link>
</template>


<script>
import VueTypes from 'vue-types';
import {
  Card, Icon, UiImage, UiTitle,
} from '~/components/atoms';

export default {
  components: {
    Card,
    Icon,
    UiImage,
    UiTitle,
  },
  props: {
    linkTo: VueTypes.string.def('#'),
    linkTitle: VueTypes.string.def(''),
    image: VueTypes.oneOfType([String, Object]),
    title: VueTypes.string.def(''),
  },
};

</script>
