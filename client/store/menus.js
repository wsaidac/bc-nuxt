
const getNestedKeySafelyFromObject = (obj, keys) => keys.reduce((nestedObj, key) => (nestedObj && nestedObj[key]) ? nestedObj[key] : null, obj); /* eslint-disable-line */
const retrieveImageFromMenuItem = node => getNestedKeySafelyFromObject(node, ['additionalAttributes', 'attachedImage'])
  || getNestedKeySafelyFromObject(node, ['connectedObject', 'categoryHeader', 'image']);

const unwrapNode = node => ({
  title: node.label,
  url: `/${getNestedKeySafelyFromObject(node, ['connectedObject', 'slug'])}`,
  image: retrieveImageFromMenuItem(node),
  categories: node.childItems && node.childItems.nodes && node.childItems.nodes.map(unwrapNode),
});

const unwrap = menu => ({ categories: menu && menu.menuItems.nodes && menu.menuItems.nodes.map(unwrapNode) });

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
