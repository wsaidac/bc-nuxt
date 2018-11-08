import Highlight from './highlights.vue';
import { mount } from '~/test/utils/with-context';

describe('Highlight', () => {
  let $mounted;

  const propsData = {
    title: 'title',
    description: 'description',
  };

  beforeEach(() => {
    $mounted = mount(Highlight, { propsData });
  });

  it('should mount', () => {
    expect($mounted.find('.category-highlights').exists()).toBe(true);
  });

  it('should show a title', () => {
    expect($mounted.find('.category-highlights h2').text()).toContain('title');
  });

  it('should show content', () => {
    expect($mounted.find('.category-highlights div').text()).toContain('description');
  });
});
