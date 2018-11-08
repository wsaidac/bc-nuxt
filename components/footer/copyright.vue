<template>
  <div class="footer-copyright">
    <div class="container">
      <img
        src="~/assets/images/logo-white.svg"
        alt="Rapido.com"
      >
      <p>
        &copy; {{ year }} - Rapido.com is part of CG | Millions of satisfied customers |
      </p>
      <p>
        <nuxt-link to="/privacy">Privacy statement</nuxt-link>
        |
        <nuxt-link to="/cookies">Cookies</nuxt-link>
        |
        <nuxt-link to="/general-conditions">General conditions</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCopyright',

  computed: {
    year() {
      return (new Date()).getFullYear();
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
