<template>
  <section class="w-full flex-1">
    <div
      class="w-full relative h-banner lg:h-banner-lg py-4"
      role="banner"
    >
      <picture>
        <source
          srcset="~/assets/images/country-restricted/regular-bg.png"
          media="(min-width: 768px)"
        >
        <source
          srcset="~/assets/images/country-restricted/mobile-bg.png"
          media="(max-width: 767px)"
        >
        <img
          alt="rapido.com"
          class="absolute w-full h-banner lg:h-banner-lg top-0 left-0 object-center object-cover"
          src="~/assets/images/country-restricted/regular-bg.png"
        >
      </picture>

      <div class="lg:hidden block absolute w-full bottom-0 left-0 bg-gradient-bright-shadow-bottom bg-gradient-shadow-top h-full" />
      <div class="container z-10 relative h-full flex items-end  lg:items-center">
        <div class="w-full md:w-1/2 lg:w-1/3">
          <h1 class="mb-6">{{ $t('pages.restricted_country.title') }}</h1>
          <h6 class="font-normal"> {{ $t('pages.restricted_country.description') }} </h6>
        </div>
      </div>
    </div>
    <article class="cg-container container container-margin">
      <h2>{{ $t('pages.restricted_country.country_list.title') }}</h2>
      <country-list
        :restricted-country="localeSelected"
        :column-sizes="columnSizes"
        @country-list:click="onSelectCountry"
      />
    </article>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import { CountryList } from '~/components/molecules';
import removeContextChangeLoader from '~/mixins/removeContextChangeLoader';

export default {
  layout: 'clean',
  components: {
    CountryList,
  },
  mixins: [removeContextChangeLoader],
  data() {
    return {
      localeSelected: 'en-us',
      columnSizes: {
        sm: '1/2',
        md: '1/3',
        lg: '1/4',
      },
    };
  },
  head() {
    const url = `https://${this.domain}${this.$route.path}`;
    return {
      link: [{ rel: 'canonical', href: url }],
    };
  },
  computed: {
    ...mapGetters('context', ['domain']),
  },
  methods: {
    onSelectCountry(code) {
      this.$router.push(`/${code}/`);
    },
  },
};

</script>
