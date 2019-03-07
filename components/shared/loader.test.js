import SharedLoader from './loader.vue';
import { mount } from '~/test/utils/with-context';

describe('SharedLoader', () => {
  let $mounted;

  it('should mount', () => {
    $mounted = mount(SharedLoader, { propsData: { loading: true } });
    expect($mounted.find('.shared-loader').exists()).toBe(true);
  });

  it('should show loading state when loading prop is true', () => {
    $mounted = mount(SharedLoader, { propsData: { loading: true } });
    expect($mounted.find('.shared-loader__overlay').exists()).toBe(true);
  });

  it('should not show loading state when loading prop is false', () => {
    $mounted = mount(SharedLoader, { propsData: { loading: false } });
    expect($mounted.find('.shared-loader__overlay').exists()).toBe(false);
  });
});
