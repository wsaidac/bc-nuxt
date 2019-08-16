<template>
  <ul class="flex py-4">
    <li
      v-for="(crumb, index) in crumbs"
      :key="crumb.url"
      :class="['items-center', isSecondLast(index) ? 'flex' : 'hidden md:flex']"
    >
      <span :class="['flex px-2', index ? 'md:flex' : 'md:hidden', isSecondLast(index) ? 'rotate-180 md:rotate-0' : '' ] ">
        <icon
          icon="breadcrumb"
          font-size="2xs"
          :color="invertColor ? 'white' : 'link'"
        />
      </span>

      <ui-link
        v-if="crumb.url"
        :title="crumb.title"
        :url="crumb.url"
        :invert="invertColor"
        :data-test="`breadcrumb-${index}`"
        sm
      >
        {{ crumb.label }}
      </ui-link>
      <p
        v-else
        :class="['font-bold text-base', invertColor ? 'text-white' : 'text-link']"
      >
        {{ crumb.label }}
      </p>
    </li>
  </ul>
</template>

<script>
import {
  get, compact, startCase, range,
} from 'lodash';

import { Icon, UiLink } from '~/components/atoms';

export default {
  components: {
    Icon,
    UiLink,
  },
  props: {
    invertColor: Boolean,
  },
  computed: {
    crumbs() {
      const path = get(this, '$route.path', '');
      const [localePath, ...routes] = compact(path.split('/'));

      const defaultCrumb = {
        label: 'Home',
        title: 'home',
        url: `/${localePath}`,
      };

      const crumbs = routes.map((route, index) => ({
        label: startCase(route),
        url: this.getUrl(index, routes, localePath),
        title: route,
      }));

      return [defaultCrumb, ...crumbs];
    },
  },
  methods: {
    getUrl(index, routes = [], localePath) {
      if (index === routes.length - 1) {
        return null;
      }

      const initialUrl = `/${localePath}`;
      return range(index + 1)
        .reduce(
          (newUrl, sub) => `${newUrl}${routes[sub]}/`,
          initialUrl,
        );
    },
    /**
     * the element should display for mobile devices just the second last element
     * for desktop: `Home > Category > Product`
     * for mobile: `< Category`
     * this method helps to identify if the current index is the second last then should
     * apply some specific responsive classes
     */
    isSecondLast(index) {
      return index === this.crumbs.length - 2;
    },
  },
};
</script>
