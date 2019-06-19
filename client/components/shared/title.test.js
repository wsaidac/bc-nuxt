import SharedTitle from './title.vue';
import { mount } from '~/test/utils/with-context';

describe('SharedTitle', () => {
  let $mounted;

  const props = {
    title: 'title text',
  };

  beforeEach(() => {
    $mounted = mount(SharedTitle, {
      stubs: ['shared-instant-tooltip'],
      propsData: props,
    });
  });

  it('should mount', () => {
    expect($mounted.find('.shared-title').exists()).toBe(true);
  });

  it('should show the title', () => {
    expect($mounted.find('.shared-title h1').text()).toContain('title text');
  });
});
