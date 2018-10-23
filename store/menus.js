/* eslint-disable */
const getNestedKeySafelyFromObject = (obj, keys) => keys.reduce((nestedObj, key) => (nestedObj && nestedObj[key]) ? nestedObj[key] : null, obj);
/* eslint-disable */
const retrieveImageFromMenuItem = (node, type) => {
  return getNestedKeySafelyFromObject(node, ['additionalAttributes', 'attachedImage', type])
    || getNestedKeySafelyFromObject(node, ['connectedObject', 'categoryHeader', 'image', type]);
};

const unwrapNode = node => ({
  title: node.label,
  url: `/${node.label}`,
  image: {
    regular: retrieveImageFromMenuItem(node, 'regular'),
    retina: retrieveImageFromMenuItem(node, 'retina'),
  },
  categories: node.childItems && node.childItems.nodes.map(unwrapNode),
});

const unwrap = menu => ({ categories: menu.menuItems.nodes.map(unwrapNode) });

export default {
  state() {
    return {
      main: {},
    };
  },

  getters: {
    main: ({ main }) => main,
  },

  mutations: {
    setMain(state, menu) {
      state.main = unwrap(menu);
    },
  },
};
