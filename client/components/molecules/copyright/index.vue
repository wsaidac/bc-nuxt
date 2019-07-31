<template>
  <div class="w-full flex justify-center items-center">
    <p class="text-xs text-gray-black mr-2">{{ $t('footer.quote') }}</p>
    <a
      href="https://cg.nl"
      target="_blank"
    >
      <img
        :src="require('~/assets/images/logo/creative-group.svg')"
        alt="Creative Group"
      >
    </a>
  </div>
</template>
