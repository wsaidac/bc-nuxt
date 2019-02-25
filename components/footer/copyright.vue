<template>
  <div class="footer-copyright">
    <div class="container">
      <img
        :alt="$t('domain-name')"
        src="~/assets/images/logo-white.svg"
      >
      <p>
        &copy; {{ year }} - Rapido.com is part of CG | Millions of satisfied customers |
      </p>
      <p>
        <nuxt-link :to="$contextPath ('privacy-policy')">
          Privacy statement
        </nuxt-link>
        |
        <nuxt-link :to="$contextPath ('cookies')">
          {{ $t('footer.cookies') }}
        </nuxt-link>
        |
        <nuxt-link :to="$contextPath ('terms-and-conditions')">
          {{ $t('footer.general-conditions') }}
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
