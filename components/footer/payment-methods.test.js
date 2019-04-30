import FooterPaymentMethods from './payment-methods.vue';
import { mount } from '~/test/utils/with-context';

describe('FooterPaymentMethods', () => {
  let $mounted;

  const paymentMethods = [
    { name: 'Visa', image: { regular: '/paymethods/visa.png', retina: '/paymethods/visa-2x.png' } },
    { name: 'Mastercard', image: { regular: '/paymethods/mastercard.png', retina: '/paymethods/mastercard-2x.png' } },
    { name: 'Maestro', image: { regular: '/paymethods/maestro.png', retina: '/paymethods/maestro-2x.png' } },
  ];

  beforeEach(() => {
    $mounted = mount(FooterPaymentMethods, {
      propsData: { paymentMethods },
      computed: {
        paymentMethodsLink: 'payment-methods',
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.footer-payment-methods').exists()).toBe(true);
  });

  it('should iterate through multiple methods', () => {
    expect($mounted.findAll('.footer-payment-methods__item').length).toBe(3);
  });
});
