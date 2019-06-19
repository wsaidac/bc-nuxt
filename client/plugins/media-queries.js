import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 768,
    md: 992,
    lg: 1260,
  },
});
