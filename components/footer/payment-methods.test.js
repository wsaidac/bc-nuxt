import FooterPaymentMethods from './payment-methods.vue';
import { mount } from '~/test/utils/with-context';

describe('FooterPaymentMethods', () => {
  let $mounted;

  const methods = [
    { name: 'Visa', imageUrl: 'https://static.rapido.com/media/topup/shop/images/paymethods/visa.png' },
    { name: 'Mastercard', imageUrl: 'https://static.rapido.com/media/topup/shop/images/paymethods/mastercard.png' },
    { name: 'Maestro', imageUrl: 'https://static.rapido.com/media/topup/shop/images/paymethods/maestro.png' },
  ];

  beforeEach(() => {
    $mounted = mount(FooterPaymentMethods, { propsData: { methods } });
  });

  it('should mount', () => {
    expect($mounted.find('.footer-payment-methods').exists()).toBe(true);
  });

  it('should iterate through multiple methods', () => {
    expect($mounted.findAll('.footer-payment-methods__item')).toHaveLength(3);
  });
});
