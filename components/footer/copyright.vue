<template>
  <div class="footer-copyright">
    <div class="container">
      <img
        :alt="$t('general.domain')"
        src="~/assets/images/logo-white.svg"
      >
      <p>
        &copy; {{ year }} - {{ $t('footer.quote') }}
      </p>
      <p>
        <nuxt-link :to="$contextPath ('privacy-policy')">
          {{ $t('privacy-statement') }}
        </nuxt-link>
        |
        <nuxt-link :to="$contextPath ('cookies')">
          {{ $t('internal-links.cookies') }}
        </nuxt-link>
        |
        <nuxt-link :to="$contextPath ('terms-and-conditions')">
          {{ $t('internal-links.general-conditions') }}
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCopyright',

  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
.footer-copyright {
  background: $primary-500;
  color: $white;
  padding: 30px 0;
  text-align: center;

  img {
    margin-bottom: 10px;
    max-height: 65px;
    max-width: 190px;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: $white;

    &:hover {
      color: $white;
      text-decoration: underline;
    }
  }
}
</style>
