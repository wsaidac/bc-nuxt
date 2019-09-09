<template>
  <nav
    role="navigation"
    :class="[translateClass, `transition-${transitionDuration}`]"
    class="lg:hidden absolute z-50 top-0 left-0 flex transition-transform"
    tabindex="0"
    :aria-label="$t('header.menu')"
  >
    <categories-menu
      :category-links="categoryLinks"
      :service-links="serviceLinks"
      @menu__close:click="onMenuClose"
      @menu__item:click="onSubMenuSelected"
    />
    <sub-menu
      v-if="showSubMenu"
      :title="subMenuTitle"
      :categories="subMenuCategories"
      @submenu__close:click="onMenuClose"
      @submenu__back:click="onBackToMenu"
    />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import VueTypes from 'vue-types';
import { get } from 'lodash';

import CategoriesMenu from './menu';
import SubMenu from './sub-menu';

export default {
  components: {
    CategoriesMenu,
    SubMenu,
  },
  props: {
    state: VueTypes.oneOf(['visible', 'hidden']).def('hidden'),
    transitionDuration: VueTypes.number.def(500),
  },
  data() {
    return {
      showSubMenu: false,
      subMenuTitle: '',
      subMenuCategories: [],
      // css transition will be -100% at the beginning
      translateClass: 'translate-x-full-hidden',
    };
  },
  computed: {
    ...mapGetters('menus', ['categoryLinks', 'serviceLinks']),
  },
  watch: {
    // why? `translate` prop cannot be computed because it is being changed for
    // the component ui actions
    state(newState) {
      if (newState === 'visible') {
        // css transition 0, that means that show the full menu
        this.translateClass = 'translate-x-none';
      }
    },
  },
  methods: {
    onMenuClose() {
      // css transition -100% (included submenu)
      this.translateClass = 'translate-x-full-hidden';

      // needed. why? the current 'sideLeft/sideRight' animation takes 500ms to show/close
      // the menu. then If It resets the values before, the animation doesn't going to be applied
      // because the elements doesn't exist
      setTimeout(() => {
        this.showMenu = false;
        this.showSubMenu = false;
        this.subMenuCategories = [];
        this.subMenuTitle = '';
      }, this.transitionDuration);

      this.$emit('menu__close:click');
    },
    onBackToMenu() {
      setTimeout(() => {
        this.showSubMenu = false;
        this.subMenuCategories = [];
        this.subMenuTitle = '';
      }, this.transitionDuration);

      this.translateClass = 'translate-x-none';
    },
    onSubMenuSelected(slug) {
      const category = this.categoryLinks.find((c) => c.slug === slug);
      const subCategories = get(category, 'categories', []);

      this.showSubMenu = Boolean(subCategories.length);
      this.subMenuTitle = category.title;
      this.subMenuCategories = subCategories;

      this.translateClass = '-translate-x-1/2';
    },
  },
};

</script>
