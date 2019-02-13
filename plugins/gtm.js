import Vue from 'vue';

function log(message) {
  if (process.env.GTM_DEBUG) console.log('[GTM]', message); // eslint-disable-line no-console
}

function page() {
  const data = {
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

function track(data) {
  log(data);
  window.dataLayer.push(data);
  return this;
}

function injectBaseTag(gtmId) {
  log('injecting base tag');
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' });
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
function getMenuHeader({ brand, mainMenu }) {
  return mainMenu.find(mainMenuItem => {
    return mainMenuItem.categories.find(
      item => item.title.toLowerCase() === brand.toLowerCase()
    );
  });
}

function transformProduct(product) {
  return {
    brand: 'TODO brand',
    category: 'TODO category',
    id: product.id,
    name: product.content.title,
    price: product.information.retailValue,
  }
}

// 1, Measuring Product Impressions
export const impressionTransformPop = (post) => {
  const mappedProducts = post.products.nodes.map((product, i) => {
    return {
      ...transformProduct(product),
      list: 'Product Overview Page', // extra
      position: i + 1,  // extra
    };
  });
  return {
    event: 'impressions',
    ecommerce: {
      impressions: mappedProducts,
    },
  };
};

// 2, Quick buy
export const impressionTransformQuickbuy = product => {
  return {
    event: 'impressions',
    ecommerce: {
      impressions: [
        {
          ...transformProduct(product),
          position: 1,
          list: 'Home Page', // extra
        },
      ],
    },
  };
};

// 3, Measuring Product Clicks
export const measureProductClick = ({ page, product }) => {
  return {
    event: 'productClick',
    ecommerce: {
      click: {
        actionField: { list: page },
        products: [
          {
            ...transformProduct(product),
            position: product.position
          },
        ],
      },
    },
  };
};

// 4, Measuring Views of Product Details
export const viewTransformDetail = product => {
  return {
    event: 'productView',
    ecommerce: {
      detail: {
        products: [transformProduct(product)],
      },
    },
  };
};

// 5, 6, Measuring addition to a shopping cart, Product Detail Page (measures adding).
export const clickTransformProductAddToCart = ({ product, quantity }) => {
  return {
    event: 'addToCart',
    ecommerce: {
      add: {
        products: [
          {
            ...transformProduct(product),
            quantity
          },
        ],
      },
    },
  };
};

export default ({ store, app }, inject) => {
  initilialize(store.getters['shared/gtmId']);

  inject('track', track);

  app.router.afterEach(() => {
    Vue.nextTick(() => {
      page();
    });
  });
};
