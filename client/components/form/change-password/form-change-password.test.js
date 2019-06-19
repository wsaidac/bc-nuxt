import FormChangePassword from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('FormChangePassword', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FormChangePassword);
  });

  it('should mount a form', () => {
    expect($mounted.find('.form-change-password').exists()).toBe(true);
  });

  it('should render 3 inputs', () => {
    expect($mounted.findAll('input')).toHaveLength(3);
  });

  it('should render a password input', () => {
    expect($mounted.find('input[type=password]').exists()).toBe(true);
  });
});
