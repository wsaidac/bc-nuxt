import ServiceBanner from './banner.vue';
import { mount } from '~/test/utils/with-context';

describe('ServiceBanner', () => {
  let $mounted;

  const propsData = {
    customerService: {
      link: {
        title: 'faq',
        url: '/us/faq',
      },
      title: 'Need more help?',
      image: {
        regular: 'http://d2ethx2wadout7.cloudfront.net/app/uploads/2018/10/23143118/5aINOIYWeN36s9ygiM0qHc/customer-care.jpg',
        retina: 'http://d2ethx2wadout7.cloudfront.net/app/uploads/2018/10/23143118/5CC1pfrnNT15Pcm7nZmScH/customer-care.jpg',
      },
      description: "We're happy to help out",
    },
  };

  beforeEach(() => {
    $mounted = mount(ServiceBanner, { propsData });
  });

  it('should mount', () => {
    expect($mounted.find('.service-banner').exists()).toBe(true);
  });

  it('should render a image', () => {
    expect($mounted.find('img').exists()).toBe(true);
  });
});
