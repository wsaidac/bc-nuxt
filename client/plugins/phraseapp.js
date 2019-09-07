/* eslint-disable */
import Vue from 'vue';

export default function ({ app }) {
  if (process.env.ENABLE_PHRASEAPP_EDITOR) {
    app.i18n.t = key => `{{__phrase_${key}__}}`;
    Vue.prototype.$t = key => `{{__phrase_${key}__}}`;

    window.PHRASEAPP_CONFIG = {
      projectId: '0e60214e84f55a0834c0705bf46181b4'
    };
    (function () {
      var phraseapp = document.createElement('script'); phraseapp.type = 'text/javascript'; phraseapp.async = true;
      phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(phraseapp, s);
    })();
  }
}
