import checkLocale from '../checkLocale';

import clientNoLocaleChange from './fixtures/clientNoLocaleChange.js';
import debugCookieTrue from './fixtures/debugCookieTrue.js';
// import marketeerLoggedIn from './fixtures/marketeerLoggedIn.js';

describe('middleware: checkLocale', () => {
  it('1: Should return null on client AND no locale change', () => {
    process.server = false;
    const result = checkLocale(clientNoLocaleChange);
    expect(result).toBeNull();
  });

  describe(`2: On:
      \t - no currentlocale
      \t - CloudFront-header-not-restricted
      \t - CloudFront-header-not-supported / not available on i18n`, () => {
    it('2.1: AND debug cookie is true, it should redirect to default locale', () => {
      checkLocale(debugCookieTrue);
      expect(debugCookieTrue.redirect).toHaveBeenCalledWith(301, `/${debugCookieTrue.app.i18n.defaultLocale}/`);
    });

    // describe('2.2: AND a marketeer is logged in / query.marketeer', () => {
    //   it('2.2.1: a marketeer should be set in the debug_cookie cookie', () => {
    //     checkLocale(marketeerLoggedIn);
    //     expect(marketeerLoggedIn.app.$cookies.set).toHaveBeenCalled();
    //   });

    //   it('2.2.2: and it should redirect', () => {
    //     checkLocale(marketeerLoggedIn);
    //     expect(marketeerLoggedIn.redirect).toHaveBeenCalledWith(301, `/${marketeerLoggedIn.app.i18n.defaultLocale}/`);
    //   });
    // });

    // describe('2.3: AND no debug_mode in any way (marketeer or debug is on)', () => {
    //   it('2.3.1: it should redirect', () => {
    //     const combinedContext = deepmerge(context, twoDeepContext);
    //     checkLocale(combinedContext);
    //     expect(combinedContext.redirect).toHaveBeenCalledWith(301, `/country-restricted`);
    //   });
    // });
  });

  // describe(`3: On
  // \t - no currentlocale
  // \t - CloudFront-header-supported / is available on i18n`, () => {
  //   describe('3.1: AND there is a locale_cookie, pick the cookie over the CF-header', () => {
  //     it('3.1.1: it should redirect to the saved cookie-locale', () => {
  //       // console.log(process.server);
  //       setCookies('country', 'da-dk'); // user was here before, apparently a danish person
  //       // console.log(cookies);
  //       const twoDeepContext = {
  //         route: {
  //           path: '',
  //         },
  //         req: {
  //           headers: {
  //             'cloudfront-viewer-country': 'BE', // 'BE' is supported
  //           },
  //         },
  //         redirect: jest.fn(),
  //       };
  //       const combinedContext = deepmerge(context, twoDeepContext);
  //       checkLocale(combinedContext);
  //       expect(combinedContext.redirect).toHaveBeenCalledWith(301, '/da-dk');
  //     });
  //   });

  //   describe('3.2: AND there is no locale_cookie', () => {
  //     const twoDeepContext = {
  //       route: {
  //         path: '',
  //       },
  //       req: {
  //         headers: {
  //           'cloudfront-viewer-country': 'BE', // 'BE' is supported
  //         },
  //       },
  //       redirect: jest.fn(),
  //     };
  //     const combinedContext = deepmerge(context, twoDeepContext);

  //     it('3.2.1: it should save the locale from CF-header in a cookie', () => {
  //       resetCookies();
  //       checkLocale(combinedContext);
  //       expect(cookies.country).toEqual('fr-be');
  //     });

  //     it('3.2.2: and redirect to CF-locale', () => {
  //       resetCookies();
  //       checkLocale(combinedContext);
  //       expect(combinedContext.redirect).toHaveBeenCalledWith(301, '/fr-be');
  //     });
  //   });
  // });

  // describe(`4: On
  //   \t - no debug_mode (no cookie, no marketeer)
  //   \t - `, () => {

  // });
});
