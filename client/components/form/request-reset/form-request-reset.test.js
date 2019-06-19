import FormRequestReset from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('FormRequestReset', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FormRequestReset);
  });

  it('should mount a form', () => {
    expect($mounted.find('.form-request-reset').exists()).toBe(true);
  });

  it('should render 1 input', () => {
    expect($mounted.findAll('input')).toHaveLength(1);
  });

  it('should render an email input', () => {
    expect($mounted.find('input[type=email]').exists()).toBe(true);
  });

  it('should emit submit', () => {
    $mounted.find('input[type=email]').setValue('foo@cg.nl');
    $mounted.find('button[type=submit]').trigger('click');
    expect($mounted.emitted().submit);
  });
});
