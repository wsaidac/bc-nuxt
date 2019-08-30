<template>
  <overlay
    :name="overlayName"
    :title="$t('country_select.title')"
    :desc="$t('country_select.description')"
  >
    blaaaa
    <country-list
      :locale-selected="localeSelected"
      @country-list:click="onChangeLocale"
    />
  </overlay>
</template>

<script>
import { mapGetters } from 'vuex';

import { Overlay, CountryList } from '~/components/molecules';

export default {
  components: { Overlay, CountryList },
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
