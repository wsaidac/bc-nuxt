<template>
  <div class="w-full flex justify-center items-center">
    <p class="text-xs text-gray-black mr-2">{{ $t('renasci.molecules.copyright.part_of') }}</p>
    <a
      aria-label="creative group"
      href="https://cg.nl"
      target="_blank"
    >
      <img
        :src="require('~/assets/images/logo/creative-group.svg')"
        alt="Creative Group"
        aria-hidden="true"
      >
    </a>
  </div>
</template>
