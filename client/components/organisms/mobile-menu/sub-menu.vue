<template>
  <div class="w-screen h-screen bg-gray-light border-r border-gray">
    <div class="bg-white mb-6">
      <div class="flex py-4 px-6 justify-end p-6 border-b border-gray">
        <button-icon
          color="primary"
          icon="close"
          :aria-label="$t('renasci.general.close')"
          @click.prevent="$emit('submenu__close:click')"
        />
      </div>
      <div
        tabindex="0"
        class="items-center px-6 py-4 border-b border-gray flex"
        @click="$emit('submenu__back:click')"
      >
        <icon
          class="rotate-180"
          icon="breadcrumb"
        />
        <p class="ml-2">{{ $t('renasci.organisms.mobile_menu.sub.to_overview') }}</p>
      </div>
    </div>

    <div class="bg-white mb-6">
      <main-title
        class="px-6 pt-6"
        type="secondary"
      >
        {{ title }}
      </main-title>

      <menu-accordion
        :list="categories"
        type="link"
      />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { MenuAccordion, MainTitle } from '~/components/molecules';
import { ButtonIcon, Icon } from '~/components/atoms';

export default {
  components: {
    MenuAccordion,
    MainTitle,
    ButtonIcon,
    Icon,
  },
  props: {
    title: VueTypes.string.def(''),
    categories: VueTypes.array.def([]),
  },
};

</script>
