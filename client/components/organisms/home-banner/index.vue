<template>
  <section
    role=" banner"
    class=" w-full relative inline-block min-h-banner"
  >
    <banner-image
      :src="header.image"
      height="full"
    />
    <div class="absolute inset-0 flex items-end -mb-10 -ml-6 md:ml-0">
      <container>
        <row>
          <column class="w-full">
            <banner-card
              :title="header.titlePart1"
              :subtitle="header.titlePart2"
              :description="header.description"
              :button-text="header.buttonText"
              @banner-card:click="onBannerCardClick"
            />
          </column>
        </row>
      </container>
    </div>
  </section>
</template>

<script>
import VueTypes from 'vue-types';
import { Container, Row, Column } from '~/components/grid';
import { BannerCard, BannerImage } from '~/components/molecules';

export default {
  components: {
    Container,
    Row,
    Column,
    BannerCard,
    BannerImage,
  },
  props: {
    header: VueTypes.shape({
      image: VueTypes.oneOfType([Object, String]).def(''),
      titlePart1: VueTypes.string.def(''),
      titlePart2: VueTypes.string.def(''),
      description: VueTypes.string.def(''),
      buttonText: VueTypes.string.def(''),
    }).loose.def({}),
  },
  methods: {
    onBannerCardClick() {
      console.log('what should we do here?');
    },
  },
};

</script>
