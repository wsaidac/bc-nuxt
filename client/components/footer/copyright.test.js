import FooterCopyright from './copyright.vue';
import { mount } from '~/test/utils/with-context';

describe('FooterCopyright', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FooterCopyright);
  });

  it('should mount', () => {
    expect($mounted.find('.footer-copyright').exists()).toBe(true);
  });

  it('should show the current year as the copyright year', () => {
    expect($mounted.find('.container p:first-of-type').text()).toContain((new Date()).getFullYear());
  });
});
