import FooterLinks from './links.vue';
import { mount } from '~/test/utils/with-context';

describe('FooterLinks', () => {
  let $mounted;

  const columns = [
    {
      title: 'Rapido.com',
      links: [{ title: 'About us', url: '/about-us' }, { title: 'Payment options', url: '/payment-options' }],
    },
    {
      title: 'Customer Care',
      links: [{ title: 'Help', url: '/help' }],
    },
  ];

  beforeEach(() => {
    $mounted = mount(FooterLinks, { propsData: { columns } });
  });

  it('should mount', () => {
    expect($mounted.find('.footer-links').exists()).toBe(true);
  });

  it('should iterate through multiple columns', () => {
    expect($mounted.findAll('.footer-links__desktop .footer-links__list')).toHaveLength(2);
  });

  it('should render all links', () => {
    expect($mounted.findAll('.footer-links__desktop a')).toHaveLength(3);
  });
});
