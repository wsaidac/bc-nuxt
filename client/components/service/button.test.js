import ServiceButton from './button.vue';
import { mount } from '~/test/utils/with-context';

describe('ServiceButton', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(ServiceButton, {
      computed: {
        faqUrl() {
          return 'en-us';
        },
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.service-button').exists()).toBe(true);
  });
});
