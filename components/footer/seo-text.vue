<template>
  <div class="footer-seo-text">
    <h2>Enjoy a continuous service with Rapido.com</h2>
    <p>Looking for online gift cards, a mobile recharge or a quick and easy way to
    enjoy your favorite entertainment? Rapido is an online store, with a broad selection
    of e-vouchers. Use Rapido to buy gift cards online and receive your unique code within
    30 seconds. That’s right — 30 seconds. At Rapido, we value rapid delivery but most importantly
    the safety of your purchase. Forget crowded lines in the supermarket and unreliable websites
    — get online and enjoy your e-voucher in 30 seconds.</p>
  </div>
</template>

<style lang="scss">
.footer-seo-text {
  margin: 20px 0 40px;

  h2 {
    font-size: $font-size-h5;
    font-weight: $font-weight-bold;
    margin: 0;
  }

  p {
    margin: 3px 0;
  }

  @include media-breakpoint-down('md') {
    p {
      font-size: $font-size-smaller;
    }
  }

  @include media-breakpoint-down('xs') {
    display: none;
  }
}
</style>
