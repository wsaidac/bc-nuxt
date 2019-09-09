<template>
  <transition name="fade">
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="fixed-notification-title"
      aria-describedby="fixed-notification-content"
      style="animation-duration: 0.3s"
      class="fixed bg-white bottom-0 left-0 w-screen z-10 border-t-gray border-t"
    >
      <div class="container flex justify-between mx-auto p-4 pt-6">
        <ui-title
          id="fixed-notification-title"
          type="h4"
        >
          <icon
            v-if="type === 'warning'"
            color="error"
            font-size="base"
            icon="warning"
            class="leading-normal"
          />
          {{ title }}
        </ui-title>
        <icon
          icon="close"
          color="primary"
          class="cursor-pointer active:bounce"
          @click="$emit('fix-banner__close:click')"
        />
      </div>
      <divider />
      <div class="container mx-auto p-4 pb-6">
        <div
          id="fixed-notification-content"
          class="html-injected pb-4"
          v-html="content"
        />
        <ui-link
          :url="url"
          data-test="fixed-notification-link"
        >
          {{ linkText }}
        </ui-link>
      </div>
    </div>
  </transition>
</template>

<script>
import VueTypes from 'vue-types';
import {
  Divider, UiTitle, UiLink, Icon,
} from '~/components/atoms';

export default {
  components: {
    Divider,
    UiTitle,
    UiLink,
    Icon,
  },
  props: {
    title: VueTypes.string.def(''),
    content: VueTypes.string.def(''),
    url: VueTypes.string.def(''),
    linkText: VueTypes.string.def(''),
    type: VueTypes.oneOf(['warning', '']).def(''),
  },
};

</script>
