import SharedTooltip from './tooltip.vue';
import { mount } from '~/test/utils/with-context';

describe('SharedTooltip', () => {
  let $mounted;

  const props = {
    iconPrefixContent: 'message',
    title: 'title',
    content: 'content',
  };

  beforeEach(() => {
    $mounted = mount(SharedTooltip, { propsData: props });
  });

  it('should mount', () => {
    expect($mounted.find('.shared-tooltip').exists()).toBe(true);
  });

  it('should show the message', () => {
    expect($mounted.find('.el-popover__reference span').text()).toBe('message');
  });
});
