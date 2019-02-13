import ServiceButton from './button.vue';
import { mount } from '~/test/utils/with-context';

describe('ServiceButton', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(ServiceButton);
  });

  it('should mount', () => {
    expect($mounted.find('.service-button').exists()).toBe(true);
  });

  it('should show a strong-text "Need some help?"', () => {
    expect($mounted.find('.service-button strong').text()).toContain('Need some help');
  });

  it('should show content', () => {
    expect($mounted.find('.service-button span').text()).toContain("Take a look at the FAQ's");
  });
});
