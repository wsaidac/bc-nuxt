
import {
  get, startCase, map, isEmpty, reduce, compact,
} from 'lodash';


const getNestedKeySafelyFromObject = (obj, keys) => keys.reduce((nestedObj, key) => (nestedObj && nestedObj[key]) ? nestedObj[key] : null, obj); /* eslint-disable-line */
const retrieveImageFromMenuItem = node => getNestedKeySafelyFromObject(node, ['additionalAttributes', 'attachedImage'])
  || getNestedKeySafelyFromObject(node, ['connectedObject', 'categoryHeader', 'image']);

const unwrapNode = node => ({
  title: node.label,
  url: `/${getNestedKeySafelyFromObject(node, ['connectedObject', 'slug'])}`,
  image: retrieveImageFromMenuItem(node),
  categories: get(node, 'childItems.nodes', []).map(unwrapNode),
});

const unwrap = menu => ({ categories: get(menu, 'menuItems.nodes', []).map(unwrapNode) });


/**
 * Method to format every footer link
 * @param {Object} link
 * @return {Object} { title, url }
 */
const getFormattedFooterLink = (link = {}) => ({
  title: get(link, 'href.title', startCase(link.slug)),
  url: link.slug,
});

// TODO: Move all this logic to API HUB
/**
 * Method to get a formatted footer links object
 * @param {Object} footer
 * @return {Object} { [`key`]: { title, url } }
 */
const getFooterLinks = (footer = {}) => {
  if (isEmpty(footer)) {
    return {};
  }

  const links = reduce(
    footer,
    (linkMap, link = null, linkName) => {
      if (!link) return linkMap;
      return {
        ...linkMap,
        [linkName]: getFormattedFooterLink(link),
      };
    }, {},
  );

  return links;
};


const LEGAL_LINKS_TYPES = ['cookieStatement', 'generalConditions', 'privacyPolicy'];

/**
 * Method to get formatted category links
 * @param {Object} main
 * @return {Array} [..., { title, url }]
 */
const getCategoryLinks = (main = {}) => map(main.categories, ({ title, url }) => ({
  title, url,
}));

/**
 * Method to get formatted legal footer links
 * @param {Object} footerLinks
 * @return {Array} [..., { title, url }]
 */
const getLegalLinks = (footerLinks = {}) => compact(LEGAL_LINKS_TYPES.map(link => footerLinks[link]));

/**
 * Method to get formatted service footer links
 * @param {Object} footerLinks
 * @return {Array} [..., { title, url }]
 */
const getServiceLinks = (footerLinks = {}) => compact(
  map(
    footerLinks,
    (value, key) => (!LEGAL_LINKS_TYPES.includes(key) ? value : null),
  ),
);

export default {
  state() {
    return {
      main: {},
      footer: {},
    };
  },

  getters: {
    main: ({ main }) => main,
    footer: ({ footer }) => footer,
    categoryLinks: ({ main }) => getCategoryLinks(main),
    footerLinks: ({ footer }) => getFooterLinks(footer),
    legalLinks: (_, getters) => getLegalLinks(getters.footerLinks),
    serviceLinks: (_, getters) => getServiceLinks(getters.footerLinks),
  },

  actions: {
    async fetchHeaderMenu({ commit }, { app, error }) {
      try {
        const { data: { menus } } = await app.$query('menus', { slug: 'main' });

        if (!menus) {
          error({ statusCode: 404, message: app.i18n.t('general.critical_error') });
        } else {
          commit('setMain', menus.nodes[0]);
        }
      } catch ({ statusCode, message }) {
        error({ statusCode, message });
      }
    },

    async fetchFooterMenu({ commit }, { app, error }) {
      try {
        const { data } = await app.$query('footer');

        if (!data) {
          error({ statusCode: 404, message: app.i18n.t('general.critical_error') });
        } else {
          commit('setFooter', data);
        }
      } catch ({ statusCode, message }) {
        error({ statusCode, message });
      }
    },
  },

  mutations: {
    setMain(state, menu) {
      state.main = unwrap(menu);
    },
    setFooter(state, menu) {
      state.footer = menu;
    },
  },
};
