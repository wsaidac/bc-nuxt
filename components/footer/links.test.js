import FooterLinks from './links.vue';
import { mount } from '~/test/utils/with-context';

const staticPages = {
  aboutUs: { title: 'About us', url: '/about-us', component: 'AboutUs' },
  paymentMethods: { title: 'Payment options', url: '/payment-methods', component: 'PaymentMethods' },
  help: { title: 'Help', url: '/help' },
  privacyPolicy: { title: 'Privacy Policy', url: '/privacy-policy', component: 'PrivacyPolicy' },
  termsAndConditions: { title: 'Conditions', url: '/general-conditions', component: 'TermsAndConditions' },
};

describe('FooterLinks', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FooterLinks, { propsData: { staticPages } });
  });

  it('should mount', () => {
    expect($mounted.find('.footer-links').exists()).toBe(true);
  });

  it('should iterate through multiple columns', () => {
    expect($mounted.findAll('.footer-links__desktop .footer-links__list')).toHaveLength(3);
  });

  it('should render all links', () => {
    expect($mounted.findAll('.footer-links__desktop a')).toHaveLength(5);
  });
});
