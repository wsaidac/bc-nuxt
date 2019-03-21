import FormPersonalDetails from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('FormPersonalDetails', () => {
  let $mounted;

  const value = {
    firstName: 'Foo',
    prefix: '',
    lastName: 'Bar',
    birthday: '1999-02-14',
    gender: 'male',
    phoneNumber: '+31610101001',
  };

  beforeEach(() => {
    $mounted = mount(FormPersonalDetails, { propsData: { value } });
  });

  it('should mount a form', () => {
    expect($mounted.find('.form-personal-details').exists()).toBe(true);
  });

  it('should render 8 inputs (gender = 3)', () => {
    expect($mounted.findAll('input')).toHaveLength(8);
  });

  it('should prefill first-name with passed prop', () => {
    expect($mounted.find('.el-form-item[label="first-name"] input').element.value).toEqual(value.firstName);
  });

  it('should emit value object on input', () => {
    $mounted.find('.el-form-item[label="first-name"] input').setValue('FooTwo');
    expect($mounted.emitted().input);
    expect($mounted.emitted().input[0][0].firstName).toEqual('FooTwo');
  });

  it('should change the value on input', () => {
    const inputFirstName = $mounted.find('.el-form-item[label="first-name"] input');
    inputFirstName.setValue('FooTwo');
    expect(inputFirstName.element.value).toEqual('FooTwo');
  });
});
