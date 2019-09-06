<template>
  <section class="country-restricted__body">
    <div
      class="country-restricted__banner"
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
          class="country-restricted__banner__image"
          src="~/assets/images/country-restricted/regular-bg.png"
        >
      </picture>

      <div class="overlay" />
      <div class="container cg-container container-margin country-restricted__banner__content">
        <div class="meta">
          <h1>{{ $t('pages.restricted_country.title') }}</h1>
          <h6> {{ $t('pages.restricted_country.description') }} </h6>
        </div>
      </div>
    </div>
    <article class="cg-container container container-margin country-restricted__content">
      <h2>{{ $t('pages.restricted_country.country_list.title') }}</h2>
      <p>{{ $t('pages.restricted_country.country_list.desc') }}</p>
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

import CountryList from '~/components/ui/country-list';
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
    return {
      title: 'Rapido.com - Choose Country',
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

<style lang="scss" scoped>
$banner-height: 20rem;
$banner-height-lg: 389px;

$overlay-black-color: rgba(255, 255, 255, 0);
$overlay-light-color: rgba(255, 248, 234, 0.9);

.country-restricted {
  &__body {
    flex: 1;
    width: 100%;
  }

  &__banner {
    height: $banner-height;
    padding-bottom: 1rem;
    padding-top: 1rem;
    position: relative;
    width: 100%;

    &__image {
      height: $banner-height;
      left: 0;
      object-fit: cover;
      object-position: center;
      position: absolute;
      top: 0;
      width: 100%;

      @include media-breakpoint-up("lg") {
        height: $banner-height-lg;
      }
    }

    &__content {
      align-items: flex-start;
      display: flex;
      height: 100%;
      position: relative;
      z-index: 10;

      .meta {
        width: 100%;

        h1 {
          margin-bottom: 1.5rem;
        }

        h6 {
          font-weight: 400;
        }

        @include media-breakpoint-up("sm") {
          width: 50%;
        }

        @include media-breakpoint-up("lg") {
          width: 33%;
        }
      }

      @include media-breakpoint-up("xs") {
        align-items: center;
      }
    }

    @include media-breakpoint-up("lg") {
      height: $banner-height-lg;
    }
  }

  &__content {
    h2,
    p {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  }
}

.overlay {
  background-image: linear-gradient($overlay-black-color 0%, $overlay-light-color 78%);
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  @include media-breakpoint-up("lg") {
    display: none;
  }
}
</style>
