import ProductInstantTooltip from './instant-tooltip.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductInstantTooltip', () => {
  let $mounted;

  const props = {
    message: 'message',
    title: 'title',
    content: 'content',
  }

  beforeEach(() => {
    $mounted = mount(ProductInstantTooltip, { propsData: props });
  });

  it('should mount', () => {
    expect($mounted.find('.product-instant-tooltip').exists()).toBe(true);
  });

  it('should show the message', () => {
    expect($mounted.find('.el-popover__reference span').text()).toBe('message');
  });
});
