<template>
  <div>
    <header-banner
      :image-url="banner.imageUrl"
      :payoff="banner.payoff"
    />
    <header-usps
      :usps="usps"
    />
    <ui-icon icon="close" />
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';
import HeaderBanner from '~/components/header/banner';
import HeaderUsps from '~/components/header/usps';

export default {
  components: {
    UiIcon,
    HeaderBanner,
    HeaderUsps,
  },

  data() {
    return {
      banner: {
        imageUrl:
          'https://static.rapido.com/media/topup/rapido/default/images/headers/default-desktop.jpg',
        payoff:
          '<p>Get all your codes quick,<br><strong>safe and simple!</strong></p>',
      },
      usps: [
        { icon: 'clock', label: 'Order in Minutes' },
        { icon: 'lock', label: 'Pay safely & securely' },
        { icon: 'envelope', label: 'Get your code instantly' },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>
