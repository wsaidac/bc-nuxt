import FormAddressDetails from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('FormAddressDetails', () => {
  let $mounted;

  const value = {
    address: 'Fifth Avenue',
    houseNumber: '1337',
    postalCode: '10020',
    city: 'New York',
  };

  beforeEach(() => {
    $mounted = mount(FormAddressDetails, { propsData: { value } });
  });

  it('should mount a form', () => {
    expect($mounted.find('.form-address-details').exists()).toBe(true);
  });

  it('should render 4 inputs', () => {
    expect($mounted.findAll('input')).toHaveLength(4);
  });

  it('should prefill street with passed prop', () => {
    expect(
      $mounted.find('.el-form-item[label="street"] input').element.value,
    ).toEqual(value.address);
  });

  it('should emit value object on input', () => {
    $mounted
      .find('.el-form-item[label="street"] input')
      .setValue('Gorterplaats');
    expect($mounted.emitted().input);
    expect($mounted.emitted().input[0][0].address).toEqual('Gorterplaats');
  });

  it('should change the value on input', () => {
    const inputFirstName = $mounted.find('.el-form-item[label="street"] input');
    inputFirstName.setValue('Broadway');
    expect(inputFirstName.element.value).toEqual('Broadway');
  });
});
