const unwrapNode = node => ({
  label: node.label,
  image: node.attachedImage && node.attachedImage.sourceUrl,
  items: node.childItems && node.childItems.nodes.map(unwrapNode),
});

const unwrap = menu => ({ items: menu.menuItems.nodes.map(unwrapNode) });

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
