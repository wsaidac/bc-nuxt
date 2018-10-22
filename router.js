/* eslint-disable import/prefer-default-export */

import Vue from 'vue';
import Router from 'vue-router';
import Dispatcher from '~/pages/dispatcher';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '*',
        name: 'Dispatcher',
        component: Dispatcher,
      },
    ],
  });
}
