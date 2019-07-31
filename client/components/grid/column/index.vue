<template functional>
  <div
    class="overflow-hidden px-1 sm:px-2 xl:px-3 flex flex-col"
    v-bind="data.attrs"
    :class="[data.staticClass]"
  >
    <slot />
  </div>
</template>
