import SeoBreadcrumbs from './breadcrumbs.vue';
import { mount } from '~/test/utils/with-context';

describe('SeoBreadcrumbs', () => {
  let $mounted;

  const crumbs = ['1-lvl-deep', '2-lvl-deep'];

  beforeEach(() => {
    $mounted = mount(SeoBreadcrumbs, { propsData: { crumbs } });
  });

  it('should mount', () => {
    expect($mounted.find('.seo-breadcrumbs').exists()).toBe(true);
  });
});
