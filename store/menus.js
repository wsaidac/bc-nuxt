const unwrapNode = node => ({
  title: node.label,
  url: `/${node.label}`,
  imageUrl:
    node.additionalAttributes
    && node.additionalAttributes.attachedImage
    && node.additionalAttributes.attachedImage.sourceUrl,
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
