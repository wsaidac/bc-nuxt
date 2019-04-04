/* eslint-disable */
const getNestedKeySafelyFromObject = (obj, keys) => keys.reduce((nestedObj, key) => (nestedObj && nestedObj[key]) ? nestedObj[key] : null, obj);
/* eslint-disable */
const retrieveImageFromMenuItem = (node) => {
  return getNestedKeySafelyFromObject(node, ['additionalAttributes', 'attachedImage'])
    || getNestedKeySafelyFromObject(node, ['connectedObject', 'categoryHeader', 'image']);
};

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
      footer: {}
    };
  },

  getters: {
    main: ({ main }) => main,
    footer: ({ footer }) => footer,
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
