<template>
  <fragment>
    <brand-list
      v-for="category in pageCategories"
      :key="category.slug"
      :category="category"
    />
  </fragment>
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
