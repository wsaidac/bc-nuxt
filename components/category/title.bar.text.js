import CategoryTitleBar from './title-bar.vue';
import { mount } from '~/test/utils/with-context';

describe('CategoryTitleBar', () => {
  it('should mount with a class of category-info', () => {
    const $mounted = mount(CategoryTitleBar);
    expect($mounted.find('.category-title-bar').exists()).toBe(true);
  });
});
