<template>
  <h1>
    <ui-link :url="homeLink">
      <ui-image
        :src="getSrc()"
        :alt="alt"
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
  },
  methods: {
    getSrc() {
      const label = this.$store.getters['context/label'];
      try {
        /* eslint-disable import/no-dynamic-require */
        // eslint-disable-next-line global-require
        return require(`~/assets/images/logo/${label}.svg`);
      } catch (error) {
        return 'https://via.placeholder.com/128x30';
      }
    },
  },
};
</script>
