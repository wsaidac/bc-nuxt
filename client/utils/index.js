import { get } from 'lodash';

export function uppercaseCountryInLocale(lang) {
  return lang
    .split('-')
    .map((e, i) => (i === 1 ? e.toUpperCase() : e))
    .join('-');
}

export function generateCleanList(obj, value) {
  return obj && obj.nodes.map((el) => {
    const result = get(el, value, '');
    return result === null ? '' : result.replace('&amp;', '&');
  });
}

function renderErrorPage(error, app) {
  const prod = process.env.NODE_ENV === 'production';
  if (!prod) {
    // eslint-disable-next-line no-console
    console.warn('[Sync error]:', error);
  }

  if (prod && app.$sentry) {
    app.$sentry.captureException(error);
  }

  return {
    layout: 'Error',
    post: {
      title: `${app.i18n.t('error.title')} - ${app.i18n.t(
        'general.domain',
      )}`,
    },
  };
}

const utils = {
  uppercaseCountryInLocale,
  generateCleanList,
  renderErrorPage,
};

export default utils;
