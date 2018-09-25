<template>
  <div class="footer-links container">
    <div
      v-for="column in columns"
      :key="column.title"
      class="footer-links__category"
    >
      <h5 v-text="column.title" />
      <ul class="list-unstyled">
        <li
          v-for="link in column.links"
          :key="link.title"
        >
          <nuxt-link
            :to="link.url"
            :title="link.title"
          >
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',

  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.footer-links {
  align-items: flex-start;
  display: flex;

  @include media-breakpoint-up('sm') {
    margin-bottom: 40px;
    margin-top: 40px;
  }

  &__category {
    flex: 1 1;
    margin: 0;
    text-align: center;

    h5 {
      margin: 0;
    }

    a {
      color: $body-color;
    }
  }
}
</style>
