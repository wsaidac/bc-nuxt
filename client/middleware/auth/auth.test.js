import auth from './index';

const app = {
  i18n: { locale: 'nl-nl' },
  $query: jest.fn(),
};
const redirect = jest.fn();
const store = {
  commit: jest.fn(),
};

describe('middleware: auth', () => {
  it('should redirect on an error', async () => {
    app.$query.mockReturnValueOnce({
      data: null,
      errors: ['error'],
    });

    await auth({ app, redirect, store });
    expect(redirect).toHaveBeenCalledWith('/nl-nl/sessions/login');
  });

  it('should commit the user on no error', async () => {
    app.$query.mockReturnValueOnce({
      data: {
        user: 'mockUser',
      },
      errors: [],
    });

    await auth({ app, redirect, store });
    expect(store.commit).toHaveBeenCalledWith('auth/setCurrentUser', 'mockUser');
  });
});
