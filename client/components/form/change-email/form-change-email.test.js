import FormChangeEmail from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('FormChangeEmail', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FormChangeEmail);
  });

  it('should mount a form', () => {
    expect($mounted.find('.form-change-email').exists()).toBe(true);
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
});
