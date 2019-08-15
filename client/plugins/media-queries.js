import Vue from 'vue';
import VueMq from 'vue-mq';
import { breakpoints } from '~/constants';

Vue.use(VueMq, {
  breakpoints: {
    sm: breakpoints.SM,
    md: breakpoints.MD,
    lg: breakpoints.LG,
  },
  // default for SSR
  defaultBreakpoint: 'sm',
});
