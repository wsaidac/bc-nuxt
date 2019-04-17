import OrderItem from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('order-item', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(OrderItem, {
      propsData: {
        order: {
          id: '123456',
          pay_method: 'Paypal',
          payment_status: 'unpaid',
          created_at: '2018-08-08 12:12:12',
          status: 'cancelled',
          topUpCode: '15ABCD123456783',
          products: [
            {
              name: '1x Apple & iTunes card 10 euro',
              display_name: '1x Apple & iTunes card 10 euro',
              codes: [
                {
                  code: 'code',
                  serial_number: '12345',
                  image_url: '/image/url',
                  redeem_url: 'http://redeem-url',
                  reference: '1234-24234-234-24',
                  status: 'cancelled',
                },
              ],
            },
          ],
        },
      },
    });
  });

  it('should mount a panel with data', () => {
    expect($mounted.find('.cg-order-item__name').exists()).toBe(true);
    expect($mounted.find('.cg-order-item__top-up-code').exists()).toBe(true);
    expect($mounted.find('.cg-order-item__top-up-code span').exists()).toBe(
      true,
    );
    expect($mounted.findAll('.cg-order-item__image').length).toEqual(1);
  });

  it('showDetails should toggle on click', () => {
    expect($mounted.vm.$data.showDetails).toBe(false);
    const toggleDetails = $mounted.find('.cg-order-item__purchase-status a');
    toggleDetails.trigger('click');
    expect($mounted.vm.$data.showDetails).toBe(true);
  });

  it('showTerms should toggle on method call', () => {
    expect($mounted.vm.$data.showTerms).toBe(false);
    $mounted.vm.toggleTerms();
    expect($mounted.vm.$data.showTerms).toBe(true);
  });
});
