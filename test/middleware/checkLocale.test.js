import checkLocale from '~/middleware/checkLocale';

import clientNoLocaleChange from './fixtures/clientNoLocaleChange.js';
import debugCookieTrue from './fixtures/debugCookieTrue.js';
import marketeerLoggedIn from './fixtures/marketeerLoggedIn.js';
import notSupportedCF from './fixtures/notSupportedCF.js';
import cookieOverCF from './fixtures/cookieOverCF.js';
import useCFNoCookie from './fixtures/useCFNoCookie.js';
import userOnRestrictedCountry from './fixtures/userOnRestrictedCountry.js';
import noUppercaseLocale from './fixtures/noUppercaseLocale.js';
import saveLowercaseLocale from './fixtures/saveLowercaseLocale.js';

describe('middleware: checkLocale', () => {
  describe('1: On - client AND no locale change', () => {
    it('1.1: should return null', () => {
      process.server = false;
      const result = checkLocale(clientNoLocaleChange);
      expect(result).toBeNull();
    });
  });

  describe(`2: On:
    \t - no currentlocale
    \t - CloudFront-header-not-restricted
    \t - CloudFront-header-not-supported / not available on i18n`, () => {
    it('2.1: AND debug cookie is true, it should redirect to default locale', () => {
      process.server = true;
      checkLocale(debugCookieTrue);
      expect(debugCookieTrue.redirect).toHaveBeenCalledWith(301, `/${debugCookieTrue.app.i18n.defaultLocale}/`);
    });

    describe('2.2: AND a marketeer is logged in / query.marketeer', () => {
      it('2.2.1: a marketeer should be set in the debug_cookie cookie', () => {
        checkLocale(marketeerLoggedIn);
        expect(marketeerLoggedIn.app.$cookies.set).toHaveBeenCalled();
      });

      it('2.2.2: and it should redirect', () => {
        checkLocale(marketeerLoggedIn);
        expect(marketeerLoggedIn.redirect).toHaveBeenCalledWith(301, `/${marketeerLoggedIn.app.i18n.defaultLocale}/`);
      });
    });

    describe('2.3: AND no debug_mode in any way (marketeer and debug are off)', () => {
      it('2.3.1: it should redirect to country_restricted page', () => {
        checkLocale(notSupportedCF);
        expect(notSupportedCF.redirect).toHaveBeenCalledWith(301, `/country-restricted`);
      });
    });
  });

  describe(`3: On
    \t - no currentlocale
    \t - CloudFront-header-supported / is available on i18n`, () => {
    describe('3.1: AND there is a locale_cookie, pick the cookie over the CF-header', () => {
      it('3.1.1: it should redirect to the saved cookie-locale', () => {
        checkLocale(cookieOverCF);
        expect(cookieOverCF.redirect).toHaveBeenCalledWith(301, '/da-dk');
      });
    });

    describe('3.2: AND there is no locale_cookie', () => {
      it('3.2.1: it should save the locale from CF-header in a cookie', () => {
        checkLocale(useCFNoCookie);
        expect(useCFNoCookie.app.$cookies.set).toHaveBeenCalledWith('country', 'fr-be', {
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });
      });

      it('3.2.2: and redirect to CF-locale', () => {
        checkLocale(useCFNoCookie);
        expect(useCFNoCookie.redirect).toHaveBeenCalledWith(301, '/fr-be');
      });
    });
  });

  describe(`4: On
    \t - no debug_mode (no cookie, no marketeer)
    \t - user is on a restricted route / "us", eg: "en-us"
    \t - CloudFront-header is not restricted, eg: "DK"`, () => {
    it('should redirect to country-restricted page', () => {
      checkLocale(userOnRestrictedCountry);
      expect(userOnRestrictedCountry.redirect).toHaveBeenCalledWith(301, '/country-restricted');
    });
  });

  describe(`5: On - a supported locale`, () => {
    describe('5.1: AND uppercase locale', () => {
      it('5.1.1: should save the lowercase locale in a cookie', () => {
        checkLocale(noUppercaseLocale);
        expect(noUppercaseLocale.app.$cookies.set).toHaveBeenCalledWith('country', '/de-at/', { // maybe this should be 'de-at'
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });
      });

      it('5.1.2should redirect to this lowercase locale', () => {
        checkLocale(noUppercaseLocale);
        expect(noUppercaseLocale.redirect).toHaveBeenCalledWith(301, '/de-at/');
      });
    });

    describe('5.2: AND a lowercase locale', () => {
      it('5.2.1: should save the locale in a cookie', () => {
        checkLocale(saveLowercaseLocale);
        expect(saveLowercaseLocale.app.$cookies.set).toHaveBeenCalledWith('country', 'de-at', {
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });
      });
    });
  });
});
