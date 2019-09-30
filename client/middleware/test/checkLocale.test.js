import checkLocale from '../checkLocale';
import { cookieAge } from '~/constants';

import cookieOverCF from '~/test/mocks/middleware/cookieOverCF.js';
import clientNoLocaleChange from '~/test/mocks/middleware/clientNoLocaleChange.js';
import debugCookieTrue from '~/test/mocks/middleware/debugCookieTrue.js';
import marketeerLoggedIn from '~/test/mocks/middleware/marketeerLoggedIn.js';
import notSupportedCF from '~/test/mocks/middleware/notSupportedCF.js';
import useCFNoCookie from '~/test/mocks/middleware/useCFNoCookie.js';
import userOnRestrictedCountry from '~/test/mocks/middleware/userOnRestrictedCountry.js';
import noUppercaseLocale from '~/test/mocks/middleware/noUppercaseLocale.js';
import saveLowercaseLocale from '~/test/mocks/middleware/saveLowercaseLocale.js';

describe('middleware: checkLocale', () => {
  describe('1: On - client AND no locale change', () => {
    it('it should return null', () => {
      process.server = false;
      const result = checkLocale(clientNoLocaleChange);
      expect(result).toBeNull();
    });
  });

  describe(`2: On:
    \t - no currentlocale
    \t - CloudFront-header-not-restricted
    \t - CloudFront-header-not-supported / not available on i18n`, () => {
    describe('AND debug cookie is true', () => {
      it('it should redirect to default locale', () => {
        process.server = true;
        checkLocale(debugCookieTrue);
        expect(debugCookieTrue.redirect).toHaveBeenCalledWith(301, `/${debugCookieTrue.app.i18n.defaultLocale}/`);
      });
    });

    describe('AND a marketeer is logged in / query.marketeer', () => {
      it('a marketeer should be set in the debug_cookie', () => {
        checkLocale(marketeerLoggedIn);
        expect(marketeerLoggedIn.app.$cookies.set).toHaveBeenCalledWith('debug_mode', true, { "path": "/" });
      });

      it('and redirect', () => {
        checkLocale(marketeerLoggedIn);
        expect(marketeerLoggedIn.redirect).toHaveBeenCalledWith(301, `/${marketeerLoggedIn.app.i18n.defaultLocale}/`);
      });
    });

    describe('AND no debug_mode in any way (marketeer and debug are off)', () => {
      it('it should redirect to country_restricted page', () => {
        checkLocale(notSupportedCF);
        expect(notSupportedCF.redirect).toHaveBeenCalledWith(301, `/country-restricted`);
      });
    });
  });

  describe(`3: On
    \t - no currentlocale
    \t - CloudFront-header-supported / is available on i18n`, () => {
    describe('AND there is a locale_cookie, pick the cookie over the CF-header', () => {
      it('it should redirect to the saved cookie-locale', () => {
        checkLocale(cookieOverCF);
        expect(cookieOverCF.redirect).toHaveBeenCalledWith(301, '/da-dk');
      });
    });

    describe('AND there is no locale_cookie', () => {
      it('it should save the locale from CF-header in a cookie', () => {
        checkLocale(useCFNoCookie);
        expect(useCFNoCookie.app.$cookies.set).toHaveBeenCalledWith('country', 'fr-be', cookieAge);
      });

      it('and redirect to CF-locale', () => {
        checkLocale(useCFNoCookie);
        expect(useCFNoCookie.redirect).toHaveBeenCalledWith(301, '/fr-be');
      });
    });
  });

  describe(`4: On
    \t - no debug_mode (no cookie, no marketeer)
    \t - user is on a restricted route / "us", eg: "en-us"
    \t - CloudFront-header is not restricted, eg: "DK"`, () => {
    it('it should redirect to country-restricted page', () => {
      checkLocale(userOnRestrictedCountry);
      expect(userOnRestrictedCountry.redirect).toHaveBeenCalledWith(301, '/country-restricted');
    });
  });

  describe(`5: On - a supported locale`, () => {
    describe('AND uppercase locale', () => {
      it('it should save the lowercase locale in a cookie', () => {
        checkLocale(noUppercaseLocale);
        expect(noUppercaseLocale.app.$cookies.set).toHaveBeenCalledWith('country', 'de-at', cookieAge);
      });

      it('should redirect to this lowercase locale', () => {
        checkLocale(noUppercaseLocale);
        expect(noUppercaseLocale.redirect).toHaveBeenCalledWith(301, '/de-at/');
      });
    });

    describe('AND a lowercase locale', () => {
      it('it should save the locale in a cookie', () => {
        checkLocale(saveLowercaseLocale);
        expect(saveLowercaseLocale.app.$cookies.set).toHaveBeenCalledWith('country', 'de-at', cookieAge);
      });
    });
  });
});
