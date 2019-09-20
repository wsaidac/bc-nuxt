import stripTrailingSlash from '../stripTrailingSlash';

describe('middleware: stripTrailingSlash', () => {
  it('should not redirect client', () => {
    const route = {
      path: '/nl-nl////',
    };
    const redirect = jest.fn();
    process.server = false;

    stripTrailingSlash({ redirect, route });

    expect(redirect).not.toHaveBeenCalled();
  });


  it('should not redirect on no trailing slashes', () => {
    const route = {
      path: '/nl-nl/',
    };
    const redirect = jest.fn();
    process.server = true;

    stripTrailingSlash({ redirect, route });

    expect(redirect).not.toHaveBeenCalled();
  });

  it('should strip trailing slashes on the server and redirect', () => {
    const route = {
      path: '/nl-nl////',
    };
    const redirect = jest.fn();
    process.server = true;

    stripTrailingSlash({ redirect, route });

    expect(redirect).toHaveBeenCalledWith(301, '/nl-nl');
  });
});
