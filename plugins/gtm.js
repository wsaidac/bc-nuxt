import Vue from 'vue';

function log(message) {
  if (process.env.GTM_DEBUG) console.log('[GTM]', message); // eslint-disable-line no-console
}

function checkPageType(path) {
  const pathArr = path.split('/').filter(el => el);

  switch (pathArr.length) {
    case 1:
      return 'HOME';

    case 2:
      return 'POP';

    case 3:
      return 'PDP';

    default:
      return 'HOME';
  }
}

function page() {
  const pageType = checkPageType(window.location.pathname);

  const data = {
    contentGroupLoaded: true,
    contentGroup: pageType,
    event: 'pageView',
    url: window.location.href,
    path: window.location.pathname,
    referrer: document.referrer,
    title: document.title,
  };
  log(data);
  window.dataLayer.push(data);
  return this;
}

function injectBaseTag(gtmId) {
  log('injecting base tag');
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    'event': 'gtm.js',
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.querySelector('head').appendChild(script);
  window.gtmInitialized = true;
}

function initilialize(gtmId) {
  if (window.gtmInitialized) return;
  if (navigator.userAgent.match(/Google Page Speed Insights/)) return;
  injectBaseTag(gtmId);
}

/* eslint-disable */
function getMenuItem(slug, store) {
  const mainMenu = store.getters['menus/main'];
  return mainMenu.categories.find(mainMenuItem => {
    return mainMenuItem.categories.find(
      item => item.url.replace(/^\/|\/$/g, '') === slug
    );
  });
}

function transformProduct(product, store) {
  const kind = product.kinds && product.kinds["nodes"][0].name || null;
  const brand = product.categories && product.categories["nodes"][0].categoryHeader.title || null;
  const slug = product.categories && product.categories["nodes"][0]['slug'] || null;
  const menuItem = getMenuItem(slug, store);

  return {
    brand,
    category: menuItem.title + '/' + brand,
    kind,
    id: product.rapidoProduct.id,
    name: product.title,
    price: product.information.issueValue,
  }
}

// 1, Measuring Product Impressions
const impressionTransformPop = ({
  post
}, store) => {
  const mappedProducts = post.products.nodes.map((product, i) => {
    return {
      ...transformProduct(product, store),
      list: 'Product Overview Page', // extra
      position: i + 1, // extra
    };
  });
  return {
    event: 'impressions',
    ecommerce: {
      impressions: mappedProducts,
    },
  };
};

const productViewTransformPop = ({
  post
}, store) => {
  const mappedProducts = post.products.nodes.map((product, i) => {
    return {
      ...transformProduct(product, store),
      position: i + 1, // extra
    };
  });
  return {
    event: 'productView',
    ecommerce: {
      detail: {
        products: mappedProducts,
      },
    },
  };
};

// 2, Quick buy
const impressionTransformQuickbuy = ({
  product
}, store) => {
  return {
    event: 'impressions',
    ecommerce: {
      impressions: [{
        ...transformProduct(product, store),
        position: 1,
        list: 'Home Page', // extra
      }, ],
    },
  };
};

const productViewTransformQuickbuy = ({
  product
}, store) => {
  return {
    event: 'productView',
    ecommerce: {
      detail: {
        products: [{
          ...transformProduct(product, store),
        }, ],
      },
    },
  };
}

// 3, Measuring Product Clicks
const measureProductClick = ({
  page,
  product
}, store) => {
  return {
    event: 'productClick',
    ecommerce: {
      click: {
        actionField: {
          list: page
        },
        products: [{
          ...transformProduct(product, store),
          position: product.position
        }, ],
      },
    },
  };
};

// 4, Measuring Views of Product Details
const viewTransformDetail = ({
  product
}, store) => {
  return {
    event: 'productView',
    ecommerce: {
      detail: {
        products: [transformProduct(product, store)],
      },
    },
  };
};

// 5, 6, Measuring addition to a shopping cart, Product Detail Page (measures adding).
const clickTransformProductAddToCart = ({
  product,
  quantity
}, store) => {
  return {
    event: 'addToCart',
    ecommerce: {
      add: {
        products: [{
          ...transformProduct(product, store),
          quantity: quantity
        }, ],
      },
    },
  };
};

const transform = {
  impressionTransformQuickbuy,
  productViewTransformQuickbuy,
  impressionTransformPop,
  productViewTransformPop,
  viewTransformDetail,
  measureProductClick,
  clickTransformProductAddToCart,
};

function track(store) {
  return (type, data) => {
    const transformedData = transform[type](data, store);
    log(transformedData);
    window.dataLayer.push(transformedData);
    return this;
  };
};

export default ({
  store,
  app
}, inject) => {
  initilialize(store.getters['shared/gtmId']);

  inject('track', track(store));

  app.router.afterEach(() => {
    Vue.nextTick(() => {
      page();
    });
  });
};
