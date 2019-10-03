<template>
  <div class="w-screen h-screen bg-gray-light border-r border-gray">
    <div class="bg-white">
      <div class="flex justify-end px-6 py-4">
        <button-icon
          icon="close"
          color="primary"
          :aria-label="$t('renasci.general.close')"
          @click.prevent="$emit('menu__close:click')"
        />
      </div>
      <main-title
        class="mx-6"
        type="secondary"
      >
        {{ $t('renasci.organisms.mobile_menu.menu') }}
      </main-title>
      <menu-accordion
        :list="categoryLinks"
        @menu-accordion__item:click="onClickItem"
      />
    </div>
    <div class="bg-white">
      <menu-accordion
        :list="serviceLinks"
        type="link"
      />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { MenuAccordion, MainTitle } from '~/components/molecules';
import { ButtonIcon } from '~/components/atoms';

export default {
  components: {
    MenuAccordion,
    MainTitle,
    ButtonIcon,
  },
  props: {
    categoryLinks: VueTypes.array.def([]),
    serviceLinks: VueTypes.array.def([]),
  },
  methods: {
    onClickItem(slug) {
      this.$emit('menu__item:click', slug);
    },
  },
};
</script>
