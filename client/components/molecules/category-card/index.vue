<template>
  <nuxt-link
    class="active:bounce"
    :to="category.url"
    :title="category.title"
    role="button"
    tabindex="0"
    :aria-label="$t('brand_box.link_name', { brandName: category.title })"
    :data-test="`category-title-${category.slug}`"
  >
    <card class="hover:border-gray-dark">
      <div class="flex flex-col items-center">
        <icon
          icon="hole"
          color="gray-light"
          size="ls"
          class="mb-1"
        />
        <ui-image
          aria-hidden="true"
          width="auto"
          tabindex="-1"
          height="18"
          contain
          :src="category.image"
        />
        <div class="h-10 flex items-center mt-1">
          <ui-title
            aria-hidden="true"
            type="h4"
            class="w-full text-center"
          >
            <span v-html="category.title" />
          </ui-title>
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
    category: VueTypes.shape({
      slug: VueTypes.string.def(''),
      url: VueTypes.string.def('#'),
      linkTitle: VueTypes.string.def(''),
      image: VueTypes.oneOfType([String, Object]),
      title: VueTypes.string.def(''),
    }),
  },
};

</script>
