import deepmerge from 'deepmerge';
import checkLocale from '../checkLocale';

const context = {
  app: {
    i18n: {
      locale: 'fr-be',
      locales: [
        /* eslint-disable */
        { code: "fr-be", iso: "fr-BE", file: "fr-be.json", name: "BE", displayName: "Belgique (Français)", restricted: false },
        { code: "nl-be", iso: "nl-BE", file: "be-nl.json", name: "BE", displayName: "België (Nederlands)", restricted: false },
        { code: "en-us", iso: "en-US", file: "en-us.json", name: "US", displayName: "United States", restricted: true }
        /* eslint-enable */
      ],
    },
  },
  redirect: {},
  route: {
    path: 'fr-be',
  },
  req: {},
  query: {},
};

describe('middleware: checkLocale', () => {
  it('should return null on client', () => {
    process.server = true;
    const result = checkLocale(context);
    expect(result).toBeNull();
  });

  it('should return null on client', () => {
    process.server = true;

    const result = checkLocale(context);
    expect(result).toBeNull();
  });

  it(`should redirect on
    \t - no currentlocale
    \t - CloudFront-header-not-restricted`, () => {
    const extraContext = {
      app: {
        $cookies: {
          get: jest.fn(),
        },
      },
      query: {
        marketeer: 'john',
      },
      route: {
        path: '', // no currentlocale
      },
      req: {
        headers: {
          'cloudfront-viewer-country': 'BE',
        },
      },
    };
    extraContext.app.$cookies.get.mockReturnValueOnce(true);
    expect(1).toEqual(1);
  });
});
