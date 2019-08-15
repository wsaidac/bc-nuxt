<template>
  <section class="w-full relative">
    <ui-title>Styleguide</ui-title>
    <divider />
    <article class="w-full">
      <ui-title
        type="h3"
        underline
      >
        Colors
      </ui-title>
      <ul class="flex flex-wrap mt-6">
        <li
          v-for="(value, name) in colors"
          :key="name"
          class="pb-6"
        >
          <p class="text-primary capitalize my-4">{{ name }}</p>
          <div
            :style="{ backgroundColor: value, width: '10rem' }"
            class="p-4 border border-gray-light "
          >
            <p class="text-white">{{ value }}</p>
          </div>
        </li>
      </ul>
    </article>
    <article class="w-full">
      <ui-title
        type="h3"
        underline
      >
        Spacing
      </ui-title>
      <ul class="flex flex-wrap mt-6 items-center">
        <li
          v-for="(value, name) in theme.spacing"
          :key="name"
          class="pb-6 mr-6"
        >
          <p class="text-primary capitalize my-4">{{ name }}</p>
          <div :class="[`p-${name}`, 'bg-gray-light']">
            <div class="w-16 h-16 bg-gray">{{ value }}</div>
          </div>
        </li>
      </ul>
    </article>
    <article class="w-full">
      <ui-title
        type="h3"
        underline
      >
        Border radius
      </ui-title>
      <ul class="flex flex-wrap mt-6 items-center">
        <li
          v-for="(value, name) in theme.borderRadius"
          :key="name"
          class="pb-6 mr-6"
        >
          <p class="text-primary capitalize my-4">{{ name }}</p>
          <div :class="['h-16 p-4 bg-gray-light', `rounded-${name}`]">{{ value }}</div>
        </li>
      </ul>
    </article>
    <article class="w-full">
      <ui-title
        type="h3"
        underline
      >
        Box shadow
      </ui-title>
      <ul class="flex flex-wrap mt-6 items-center">
        <li
          v-for="(value, name) in theme.boxShadow"
          :key="name"
          class="pb-6 mr-6"
        >
          <p class="text-primary capitalize my-4">{{ name }}</p>
          <div :class="['h-16 p-4 bg-gray-light', `shadow-${name}`]">{{ name }}</div>
        </li>
      </ul>
    </article>
    <article class="w-full">
      <ui-title
        type="h3"
        underline
      >
        Font size
      </ui-title>
      <ul class="flex flex-wrap mt-6 items-center">
        <li
          v-for="(value, name) in theme.fontSize"
          :key="name"
          class="pb-6 mr-6"
        >
          <p :class="[`text-${name}`,'text-primary capitalize my-4']">font {{ name }}</p>
        </li>
      </ul>
    </article>
    <article class="w-full">
      <ui-title
        type="h3"
        underline
      >
        Line Height
      </ui-title>
      <ul class="flex flex-wrap mt-6 items-center">
        <li
          v-for="(value, name) in theme.lineHeight"
          :key="name"
          class="pb-6 mr-6"
        >
          <p class="text-primary capitalize my-4">{{ name }}</p>
          <p
            :style="{ maxWidth: '200px'}"
            :class="[`leading-${name}`,'text-primary capitalize my-4 border-link border']"
          >
            {{ lorem }}
          </p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
/**
 * Ignore any kind of review over this component :D
 */
import theme from '~~/config/tailwind/theme';
import { flattenObject } from '~~/config/tailwind/utils';
import { UiTitle, Divider } from '~/components/atoms';


export default {
  components: {
    UiTitle,
    Divider,
  },
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Maecenas dictum tortor quam, pulvinar auctor odio pellentesque a.`,
    };
  },
  computed: {
    colors() {
      return flattenObject(theme.colors);
    },
    theme() {
      return theme;
    },
  },
};
</script>
