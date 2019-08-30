<template>
  <container>
    <brand-list
      v-for="category in pageCategories"
      :key="category.slug"
      :category="category"
    />
  </container>
</template>

<script>
import { mapGetters } from 'vuex';

import { BrandList } from '~/components/organisms';

export default {
  components: {
    BrandList,
  },
  computed: {
    ...mapGetters('menus', ['pageCategories']),

  },
};
</script>
