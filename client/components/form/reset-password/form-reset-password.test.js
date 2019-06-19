import FormResetPassword from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('FormResetPassword', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FormResetPassword);
  });

  it('should mount a form', () => {
    expect($mounted.find('.form-reset-password').exists()).toBe(true);
  });

  it('should render 2 password inputs', () => {
    expect($mounted.findAll('input[type=password]')).toHaveLength(2);
  });

  it('should toggle password visibility on click', () => {
    $mounted.find('.el-input-group__append .el-button').trigger('click');
    expect($mounted.find('input[type=password]').exists()).toBe(false);
    expect($mounted.find('input[type=text]').exists()).toBe(true);
  });
});
