<template functional>
  <div
    v-bind="data.attrs"
    :class="data.staticClass"
    class="container mx-auto w-full px-6 md:px-10 relative overflow-hidden"
  >
    <slot />
  </div>
</template>
