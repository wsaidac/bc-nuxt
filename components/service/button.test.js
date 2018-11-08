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

  // it('should show a title', () => {
  //   expect($mounted.find('.seo-block h2').text()).toContain('title');
  // });

  // it('should show content', () => {
  //   expect($mounted.find('.seo-block div').text()).toContain('description');
  // });
});
