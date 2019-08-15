<template>
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
</template>
