import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import BrandList from './index.vue';
import { info } from '~~/.storybook/utils'

import store from '~~/.storybook/store';
import mock from '~~/.storybook/mocks/homepage.state.json'
import mainMock from '~~/.storybook/mocks/main-menu.state.json'

const category = {
  "slug": "mobile-recharge",
  "title": "Mobile recharge",
  "url": "/null",
  "image": {
    "regular": "https://static-acc.rapido.com/cms/sites/3/2019/03/26093649/icon-phone.png",
    "retina": "https://static-acc.rapido.com/cms/sites/3/2019/03/26093649/icon-phone.png",
    "altText": "",
    "description": null
  },
  "showMore": true,
  "brands": [
    {
      "slug": "access-wireless",
      "title": "Access Wireless",
      "url": "/access-wireless-refill",
      "image": {
        "regular": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095457/2lgMWo1ir9QvW4WRmD7H8B/AccessWirelessLogo.png",
        "retina": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095457/4d6c5JWccZMw7uv7K3Mi2A/AccessWirelessLogo.png",
        "altText": "Access Wireless Refill",
        "description": null
      }
    },
    {
      "slug": "airvoice",
      "title": "Airvoice",
      "url": "/airvoice-wireless-refill",
      "image": {
        "regular": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095841/2lgMWo1ir9QvW4WRmD7H8B/AirvoiceLogo.png",
        "retina": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095841/4d6c5JWccZMw7uv7K3Mi2A/AirvoiceLogo.png",
        "altText": "Airvoice Wireless Refill",
        "description": null
      }
    },
    {
      "slug": "at-amp-t",
      "title": "AT&amp;T",
      "url": "/at-t-refill",
      "image": {
        "regular": "https://static-acc.rapido.com/cms/sites/3/2019/04/10111938/2lgMWo1ir9QvW4WRmD7H8B/ATandTLogo.png",
        "retina": "https://static-acc.rapido.com/cms/sites/3/2019/04/10111938/4d6c5JWccZMw7uv7K3Mi2A/ATandTLogo.png",
        "altText": "",
        "description": null
      }
    },
    {
      "slug": "cintex-wireless",
      "title": "Cintex Wireless",
      "url": "/cintex-wireless-refill",
      "image": {
        "regular": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095843/2lgMWo1ir9QvW4WRmD7H8B/CintexWirelessLogo.png",
        "retina": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095843/4d6c5JWccZMw7uv7K3Mi2A/CintexWirelessLogo.png",
        "altText": "Cintex Wireless Refill",
        "description": null
      }
    },
    {
      "slug": "ecomobile",
      "title": "Ecomobile",
      "url": "/ecomobile-refill",
      "image": {
        "regular": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/2lgMWo1ir9QvW4WRmD7H8B/EcoMobileLogo.png",
        "retina": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095845/4d6c5JWccZMw7uv7K3Mi2A/EcoMobileLogo.png",
        "altText": "ECO Mobile Refill",
        "description": null
      }
    },
    {
      "slug": "good-2-go-mobile",
      "title": "Good2Go Mobile",
      "url": "/good2go-mobile-refill",
      "image": {
        "regular": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095846/2lgMWo1ir9QvW4WRmD7H8B/Good2GoMobileLogo.png",
        "retina": "https://static-acc.rapido.com/cms/sites/3/2019/03/28095846/4d6c5JWccZMw7uv7K3Mi2A/Good2GoMobileLogo.png",
        "altText": "Good2GO Mobile Refill",
        "description": null
      }
    }
  ]
}
// definition
Vue.component('brand-list', BrandList)

const footerMock = get(mock, 'menus.footer', {})
const pmMock = get(mock, 'shared.paymentMethods', {})

store.commit('menus/setMain', mainMock.data.menus.nodes[0])
store.commit('shared/setPaymentMethods', { icons: pmMock })

// stories
storiesOf('Organisms/Brand List', module)
  .add('default', () => ({
    data() {
      return {
        category,
      }
    },
    template: `<container><brand-list :category="category" /></container>`,
    components: { BrandList },
    store,
  }), info)
