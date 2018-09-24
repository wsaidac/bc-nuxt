import UiIcon from './icon.vue';
import { mount } from '~/test/utils/with-context';

describe('UiIcon', () => {
  it('should mount an icon', () => {
    const $mounted = mount(UiIcon);
    expect($mounted.find('.ui-icon').exists()).toBe(true);
  });

  it('should set the correct icon class', () => {
    const $mounted = mount(UiIcon, { propsData: { icon: 'close' } });
    expect($mounted.find('.ui-icon').classes()).toContain('ui-icon-close');
  });
});
