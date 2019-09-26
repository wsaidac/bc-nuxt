import stripTrailingSlash from '../handleTrailingSlash';

describe('middleware: stripTrailingSlash', () => {
  it('should not redirect on client', () => {
    const route = {
      path: '/nl-nl////',
    };
    const redirect = jest.fn();
    process.server = false;
    stripTrailingSlash({ redirect, route });
    expect(redirect).not.toHaveBeenCalled();
  });

  // home page
  it('"/nl-nl" should redirect', () => {
    const route = {
      path: '/nl-nl',
    };
    const redirect = jest.fn();
    process.server = true;
    stripTrailingSlash({ redirect, route });
    expect(redirect).toHaveBeenCalledWith(301, '/nl-nl/');
  });

  it('"/nl-nl/" should not redirect', () => {
    const route = {
      path: '/nl-nl/',
    };
    const redirect = jest.fn();
    stripTrailingSlash({ redirect, route });
    expect(redirect).not.toHaveBeenCalled();
  });

  it('"/nl-nl/////" should redirect', () => {
    const route = {
      path: '/nl-nl////////',
    };
    const redirect = jest.fn();
    stripTrailingSlash({ redirect, route });
    expect(redirect).toHaveBeenCalledWith(301, '/nl-nl/');
  });

  // not home page
  it('"/nl-nl/giftcard" should not redirect', () => {
    const route = {
      path: '/nl-nl/giftcard',
    };
    const redirect = jest.fn();
    stripTrailingSlash({ redirect, route });
    expect(redirect).not.toHaveBeenCalled();
  });

  it('"/nl-nl/giftcard/" should redirect', () => {
    const route = {
      path: '/nl-nl/giftcard/',
    };
    const redirect = jest.fn();
    stripTrailingSlash({ redirect, route });
    expect(redirect).toHaveBeenCalledWith(301, '/nl-nl/giftcard');
  });

  it('"/nl-nl/giftcard/////" should redirect', () => {
    const route = {
      path: '/nl-nl/giftcard/////',
    };
    const redirect = jest.fn();
    stripTrailingSlash({ redirect, route });
    expect(redirect).toHaveBeenCalledWith(301, '/nl-nl/giftcard');
  });
});
