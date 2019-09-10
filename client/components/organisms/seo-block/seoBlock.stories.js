import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import SeoBlock from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('seo-block', SeoBlock)

const data = {
  "title": "Redeem your Spotify Premium Code",
  "content": "<p class=\"p1\"><b>Was genau kann ich hier kaufen?\r\n</b>Sie können hier einen Guthabencode für Ihre Nintendo eShop Card kaufen. Dieses Guthaben können Sie in den folgenden Nintendo Shops einlösen:</p>\r\n<p class=\"p1\"></p>\r\n\r\n<ul>\r\n \t<li class=\"p1\">Nintendo eShop für Nintendo Switch</li>\r\n</ul>\r\n&nbsp;\r\n<p class=\"p1\"></p>\r\n\r\n<ul>\r\n \t<li class=\"p1\">Nintendo eShop für Nintendo 3DS</li>\r\n</ul>\r\n&nbsp;\r\n<p class=\"p1\"><b>Was muss ich auf dieser Seite tun?</b>\r\nAuf dieser Seite können Sie auswählen, ob Sie eShop Guthaben im Wert von 15€, 25€ oder 50€ kaufen möchten.</p>\r\n<p class=\"p1\"><b>Ich habe bezahlt. Und jetzt?\r\n</b>Sobald Sie den gewünschten Betrag gewählt und Ihre Bestellung bestätigt haben, erhalten Sie eine E-Mail mit Ihrem Aufladecode und genauen Anweisungen zum Einlösen Ihres Nintendo eShop Guthaben.</p>\r\n<p class=\"p1\"><b>Für wen ist diese Seite geeignet?\r\n</b>Diese Seite ist für all diejenigen geeignet, die im Besitz einer der oben genannten Konsolen sind und die Spaß und Spiele lieben!</p>",
  "__typename": "InfoBlock"
}

// stories
storiesOf('Organisms/SeoBlock', module)
  .add('default', () => ({
    data() {
      return {
        info: data,
      }
    },
    template: `<container class="py-8"><seo-block :info="info" /></container>`,
    components: { SeoBlock },
  }), info)
