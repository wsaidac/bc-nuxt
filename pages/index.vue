<template>
  <div>
    <header-banner
      :image-url="banner.imageUrl"
      :payoff="banner.payoff"
    />
    <ui-icon icon="close" />
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';
import HeaderBanner from '~/components/header/banner';

export default {
  components: {
    UiIcon,
    HeaderBanner,
  },

  data() {
    return {
      banner: {
        imageUrl:
          'https://static.rapido.com/media/topup/rapido/default/images/headers/default-desktop.jpg',
        payoff:
          '<p>Get all your codes quick,<br><strong>safe and simple!</strong></p>',
      },
    };
  },
};
</script>

<style lang="scss">
</style>
