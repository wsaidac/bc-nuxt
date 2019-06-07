import { get } from 'lodash';

export function uppercaseCountryInLocale(lang) {
  return lang
    .split('-')
    .map((e, i) => (i === 1 ? e.toUpperCase() : e))
    .join('-');
}

export function generateCleanList(obj, value) {
  return obj && obj.nodes.map(el => get(el, value).replace('&amp;', '&'));
}

const utils = {
  uppercaseCountryInLocale,
  generateCleanList,
};

export default utils;
