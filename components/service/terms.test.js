import ServiceTerms from './terms.vue';
import { mount } from '~/test/utils/with-context';

describe('ServiceTerms', () => {
  let $mounted;

  beforeEach(() => {
    const title = 'terms title';
    const description = '<div>A description</div>';

    $mounted = mount(ServiceTerms, { propsData: { title, description } });
  });

  it('should mount', () => {
    expect($mounted.find('.service-terms').exists()).toBe(true);
  });

  it('should show a title', () => {
    expect($mounted.find('.service-terms strong').text()).toContain('terms title');
  });

  it('should show content', () => {
    expect($mounted.find('.service-terms div').text()).toContain('A description');
  });
});
