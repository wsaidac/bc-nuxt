import FooterHelp from './help.vue';
import { mount } from '~/test/utils/with-context';

describe('FooterHelp', () => {
  it('should mount', () => {
    const $mounted = mount(FooterHelp);
    expect($mounted.find('.footer-help').exists()).toBe(true);
  });
});
