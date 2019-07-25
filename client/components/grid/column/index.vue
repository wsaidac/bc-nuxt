<template functional>
  <div
    class="flex-1 overflow-hidden px-1 sm:px-2 xl:px-3"
    v-bind="data.attrs"
    :class="[data.staticClass]"
  >
    <slot />
  </div>
</template>
