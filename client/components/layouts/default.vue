<template>
  <fragment>
    <navbar />
    <slot name="banner" />
    <section class="bg-gray-light py-8">
      <container>
        <slot name="content" />
      </container>
    </section>
    <ui-footer />
  </fragment>
</template>

<script>
import VueTypes from 'vue-types';
import {
  Navbar, UiFooter,
} from '~/components/organisms';
import { Container } from '~/components/grid';

export default {
  components: {
    Navbar,
    UiFooter,
    Container,
  },
  props: {
    post: VueTypes.object.def({
      header: VueTypes.object,
      popularProducts: VueTypes.object,
      highlighted: VueTypes.object,
    }),
  },
};

</script>
