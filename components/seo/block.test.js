import SeoBlock from './block.vue';
import { mount } from '~/test/utils/with-context';

describe('SeoBlock', () => {
  let $mounted;

  const propsData = {
    title: 'title',
    description: 'description',
  };

  beforeEach(() => {
    $mounted = mount(SeoBlock, { propsData, });
  });

  it('should mount', () => {
    expect($mounted.find('.seo-block').exists()).toBe(true);
  });

  it('should show a title', () => {
    expect($mounted.find('.seo-block h2').text()).toContain('title');
  });

  it('should show content', () => {
    expect($mounted.find('.seo-block div').text()).toContain('description');
  });
});
