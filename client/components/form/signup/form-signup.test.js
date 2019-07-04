import FormSignup from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('FormSignup', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FormSignup, {
      computed: {
        footer() {
          return {
            generalConditions: {
              slug: '/',
              href: {
                title: 'title',
              },
            },
            privacyPolicy: {
              slug: '/',
              href: {
                title: 'title',
              },
            },
          };
        },
      },
    });
  });

  it('should mount a form', () => {
    expect($mounted.find('.form-signup').exists()).toBe(true);
  });

  it('should render 3 inputs', () => {
    expect($mounted.findAll('input')).toHaveLength(3);
  });

  it('should render an email input', () => {
    expect($mounted.find('input[type=email]').exists()).toBe(true);
  });

  it('should render a password input', () => {
    expect($mounted.find('input[type=password]').exists()).toBe(true);
  });

  it('should emit submit', () => {
    $mounted.find('input[type=email]').setValue('foo@cg.nl');
    $mounted.find('button[type=submit]').trigger('click');
    expect($mounted.emitted().submit);
  });
});
