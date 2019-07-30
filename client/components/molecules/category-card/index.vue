<template>
  <nuxt-link
    :to="linkTo"
    :title="linkTitle"
  >
    <ui-card class="hover:border-gray-dark">
      <div class="flex flex-col items-center">
        <ui-icon
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
    </ui-card>
  </nuxt-link>
</template>


<script>
import VueTypes from 'vue-types';
import {
  UiCard, UiIcon, UiImage, UiTitle,
} from '~/components/atoms';

export default {
  components: {
    UiCard,
    UiIcon,
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
