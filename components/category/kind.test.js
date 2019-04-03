import Kind from './kind.vue';
import { shallowMount } from '~/test/utils/with-context';

describe('Kind', () => {
  let $mounted;

  const title = 'title';

  const products = [
    {
      id: 1,
      information: {
        issueValue: 5.0,
      },
      content: {
        title: 'Verizon Prepaid Refill $5',
        image: {
          desktop: 'https://example.com/xbox.jpg',
          mobile: 'https://example.com/xbox.jpg',
        },
        tooltip: {
          content: 'Long text to show when tooltip is hovered',
          title: 'Short text to show when tooltip is not yet hovered',
        },
      },
      slug: '/product123',
    },
    {
      id: 2,
      information: {
        issueValue: 4.0,
      },
      content: {
        title: 'Verizon Prepaid Refill $5',
        image: {
          desktop: 'https://example.com/xbox.jpg',
          mobile: 'https://example.com/xbox.jpg',
        },
        tooltip: {
          content: 'Long text to show when tooltip is hovered',
          title: 'Short text to show when tooltip is not yet hovered',
        },
      },
      slug: '/product456',
    },
  ];

  const stubs = ['shared-title'];

  beforeEach(() => {
    $mounted = shallowMount(Kind, { stubs, propsData: { products, title } });
  });

  it('should mount', () => {
    expect($mounted.find('.category-kind').exists()).toBe(true);
  });
});
