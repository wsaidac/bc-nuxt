<template>
  <h1>
    <ui-link
      :url="homeLink"
      :aria-label="label"
    >
      <ui-image
        :src="getSrc()"
        :alt="alt"
        aria-hidden="true"
      />
    </ui-link>
  </h1>
</template>

<script>
import { get } from 'lodash';

import { UiImage, UiLink } from '~/components/atoms';

export default {
  components: {
    UiImage,
    UiLink,
  },
  computed: {
    homeLink() {
      return get(this, '$route.path', '').match(/\/(.*?)\//g);
    },
    alt() {
      return this.$store.getters['context/domain'];
    },
    label() {
      return this.$store.getters['context/label'] || '';
    },
  },
  methods: {
    getSrc() {
      try {
        /* eslint-disable import/no-dynamic-require */
        // eslint-disable-next-line global-require
        return require(`~/assets/images/logo/${this.label}.svg`);
      } catch (error) {
        // eslint-disable-next-line global-require
        return require('~/assets/images/logo/logo-white.svg');
      }
    },
  },
};
</script>
