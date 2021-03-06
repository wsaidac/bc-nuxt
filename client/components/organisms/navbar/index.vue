<template>
  <header class="bg-white">
    <div class="py-3 border-b border-gray">
      <container>
        <row class="justify-between">
          <column class="w-1/2 md:w-2/3 lg:w-2/12">
            <logo />
          </column>
          <column class="hidden lg:flex lg:w-9/12">
            <header-links :items="categoryLinks" />
          </column>
          <column class="w-1/2 md:w-1/3 lg:w-1/12 justify-end items-end">
            <div class="flex items-center">
              <locale
                :country="country"
                @locale:click="onToggleCountryList"
              />
              <icon
                color="primary"
                class="lg:hidden ml-4 border-l border-gray pl-4 cursor-pointer"
                icon="hamburger"
                @click.prevent="onShowMobileMenu"
              />
            </div>
          </column>
        </row>
      </container>
    </div>
    <div class="py-3 border-b border-gray">
      <container>
        <row>
          <column class="lg:w-10/12">
            <usps-list
              :list="usps.items"
              :default-usps="1"
            />
          </column>
          <column class="hidden lg:flex w-2/12 items-end">
            <ui-link
              :url="faqUrl"
              color="primary"
              target="_blank"
            >
              {{ $t('renasci.general.help') }}
            </ui-link>
          </column>
        </row>
      </container>
    </div>
    <mobile-menu
      :state="mobileMenuState"
      @menu__close:click="onHideMobileMenu"
    />
    <country-select v-if="isCountrySelectVisible" />
    <portal-target :name="overlayName" />
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import { portals } from '~/constants/';

import { UiLink, Icon } from '~/components/atoms';
import { Row, Column, Container } from '~/components/grid';
import {
  Logo, HeaderLinks, Locale, UspsList,
} from '~/components/molecules';
import { MobileMenu } from '~/components/organisms';

const CountrySelect = () => import('~/components/organisms/country-select');

export default {
  components: {
    Row,
    Column,
    Container,
    Logo,
    HeaderLinks,
    Locale,
    UspsList,
    UiLink,
    Icon,
    MobileMenu,
    CountrySelect,
  },
  data() {
    return {
      mobileMenuState: 'hidden',
      portalName: portals.PORTAL_NAME_COUNTRY_SELECT,
    };
  },
  computed: {
    ...mapGetters('menus', ['categoryLinks']),
    ...mapGetters('shared', ['usps', 'faqUrl']),
    ...mapGetters('ui', ['overlayVisibility', 'overlayName']),
    country() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale);
    },
    isCountrySelectVisible() {
      return this.overlayName === this.portalName && this.overlayVisibility === 'visible';
    },
  },
  methods: {
    onToggleCountryList() {
      this.showCountrySelect();
    },
    onShowMobileMenu() {
      this.mobileMenuState = 'visible';
    },
    onHideMobileMenu() {
      this.mobileMenuState = 'hidden';
    },
    showCountrySelect() {
      this.$store.dispatch('ui/toggleOverlay', { name: this.portalName, visibility: 'visible' });
    },
  },
};

</script>
