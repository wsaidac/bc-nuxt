const unwrapNode = node => ({
  title: node.label,
  url: `/${node.label}`,
  imageUrl: node.attachedImage && node.attachedImage.sourceUrl,
  products: node.childItems && node.childItems.nodes.map(unwrapNode),
});

const unwrap = menu => ({ products: menu.menuItems.nodes.map(unwrapNode) });

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
