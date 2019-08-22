
import {
<<<<<<< HEAD
  get, startCase, map, isEmpty, reduce, compact, kebabCase, omitBy,
=======
  get, startCase, map, isEmpty, reduce, compact, kebabCase,
>>>>>>> master
} from 'lodash';

const HOME_BRANDS_BY_CATEGORY_LIMIT = 6;


const getNestedKeySafelyFromObject = (obj, keys) => keys.reduce((nestedObj, key) => (nestedObj && nestedObj[key]) ? nestedObj[key] : null, obj); /* eslint-disable-line */
const retrieveImageFromMenuItem = node => getNestedKeySafelyFromObject(node, ['additionalAttributes', 'attachedImage'])
  || getNestedKeySafelyFromObject(node, ['connectedObject', 'categoryHeader', 'image']);

const unwrapNode = node => omitBy(({
  slug: kebabCase(node.label),
  title: node.label,
  url: `/${getNestedKeySafelyFromObject(node, ['connectedObject', 'slug'])}`,
  image: retrieveImageFromMenuItem(node),
  categories: get(node, 'childItems.nodes', []).map(unwrapNode),
}), isEmpty);

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
 * @TODO: include new icons in cms
 */
const getCategoryLinks = (main = {}) => map(main.categories, ({
  title, url, categories, slug,
}) => ({
  title, url, categories, icon: 'giftcards', slug,
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

/**
 * Method to get categories formatted specially for pages.
 * @param {Array} categoryList
 * @return {Array} [..., { title, slug, image, link, categories: (max-size: HOME_BRANDS_BY_CATEGORY_LIMIT)}]
 */
const getPageCategories = (categoryList = []) => categoryList
  .map(({ categories = [], ...rest }) => ({
    ...rest,
    showMore: categories.length > HOME_BRANDS_BY_CATEGORY_LIMIT,
    brands: categories.slice(0, HOME_BRANDS_BY_CATEGORY_LIMIT),
  }));

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
    pageCategories: ({ main }) => getPageCategories(main.categories),
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
