import FormLogin from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('FormLogin', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FormLogin);
  });

  it('should mount a form', () => {
    expect($mounted.find('.form-login').exists()).toBe(true);
  });

  it('should render 2 inputs', () => {
    expect($mounted.findAll('input')).toHaveLength(2);
  });

  it('should render an email input', () => {
    expect($mounted.find('input[type=email]').exists()).toBe(true);
  });

  it('should render a password input', () => {
    expect($mounted.find('input[type=password]').exists()).toBe(true);
  });

  it('should render a toggle password visibility button', () => {
    expect($mounted.find('.el-input-group__append .el-button').exists()).toBe(true);
  });

  it('should toggle password visibility on click', () => {
    $mounted.find('.el-input-group__append .el-button').trigger('click');
    expect($mounted.find('input[type=password]').exists()).toBe(false);
    expect($mounted.find('input[type=text]').exists()).toBe(true);
  });
});
