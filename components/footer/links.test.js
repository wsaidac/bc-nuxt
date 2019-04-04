import FooterLinks from './links.vue';
import { mount } from '~/test/utils/with-context';

describe('FooterLinks', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(FooterLinks, {
      computed: {
        footerLinks() {
          return {
            one: [
              { displayName: 'help', url: "help" },
            ],
            two: [
              { displayName: 'help', url: "help" },
              { displayName: 'help', url: "help" },
            ],
            three: [
              { displayName: 'help', url: "help" },
              { displayName: 'help', url: "help" },
              { displayName: 'help', url: "help" },
            ],
          };
        },
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.footer-links').exists()).toBe(true);
  });

  it('should iterate through multiple columns', () => {
    expect($mounted.findAll('.footer-links__desktop .footer-links__list')).toHaveLength(3);
  });

  it('should render all links', () => {
    expect($mounted.findAll('.footer-links__desktop a')).toHaveLength(6);
  });
});
