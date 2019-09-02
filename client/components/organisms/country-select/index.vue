<template>
  <overlay
    :name="overlayName"
    :title="$t('country_select.title')"
    :desc="$t('country_select.description')"
  >
    <main-title type="primary">
      {{ $t('country_select.title') }}
    </main-title>
    <p class="mb-6">{{ $t('country_select.description') }}</p>
    <country-list
      :locale-selected="localeSelected"
      @country-list:click="onChangeLocale"
    />
  </overlay>
</template>

<script>
import { mapGetters } from 'vuex';

import { Overlay, CountryList, MainTitle } from '~/components/molecules';

export default {
  components: { Overlay, CountryList, MainTitle },
  data() {
    return {
      localeSelected: this.$i18n.locale,
    };
  },

  computed: {
    ...mapGetters('ui', ['overlayName']),
  },

  methods: {
    onChangeLocale(selectedLocale) {
      if (this.$i18n.locale !== selectedLocale) {
        this.$store.dispatch('ui/toggleOverlay', { visibility: 'hidden', name: '' });
        this.$router.push(`/${selectedLocale}/`);
      }
    },
  },
};
</script>
