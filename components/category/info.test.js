import CategoryInfo from './info.vue';
import { mount } from '~/test/utils/with-context';

describe('CategoryInfo', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(CategoryInfo, {
      propsData: {
        usps: [
          {
            text: 'Order in Minutes',
            image: {
              sourceUrl: 'http://localhost:3000/app/uploads/seeds/usp-icon-fast.png',
            },
          },
        ],
        info: {
          productQuestions: [
            {
              title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
            },
            {
              title: 'What kind of account do I need to redeem my Xbox Gift Card?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
            },
            {
              title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
            },
            {
              title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
            },
            {
              title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
            },
            {
              title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
            },
            {
              title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
            },
            {
              title: 'What can i use my Xbox Gift card for?',
            content: 'You can use your Gift Card to buy Xbox games and downloadable content, movies, TV shows, music, apps and bundles. Once you’ve redeemed your Xbox Gift Card using your Microsoft account, you can spend your balance on your Xbox, through Windows and at the Microsoft Store online', // eslint-disable-line
            },
          ],
          buyQuestions: {
            title: 'Xbox digital gift Card',
            questions: [
              {
                question: 'What am i buying?',
                answer: 'You can use this Xbox Gift Card to pay in the online Microsoft Gaming Store. The Xbox Microsoft Store offers games, DLC, subscriptions and much more.',
              },
              {
                question: 'What am i buying?',
                answer: 'You can use this Xbox Gift Card to pay in the online Microsoft Gaming Store. The Xbox Microsoft Store offers games, DLC, subscriptions and much more.',
              },
              {
                question: 'What am i buying?',
                answer: 'You can use this Xbox Gift Card to pay in the online Microsoft Gaming Store. The Xbox Microsoft Store offers games, DLC, subscriptions and much more.',
              },
              {
                question: 'What am i buying?',
                answer: 'You can use this Xbox Gift Card to pay in the online Microsoft Gaming Store. The Xbox Microsoft Store offers games, DLC, subscriptions and much more.',
              },
            ],
          },
          redeem: {
            title: 'Redeem an Xbox Gift Card',
            text: 'Buy games, movies, TV, music, apps and more on Xbox and Windows.*',
          },
        },
      },
    });
  });

  it('should mount with a class of category-info', () => {
    expect($mounted.find('.category-info').exists()).toBe(true);
  });

  it('should show list items on click', () => {
    expect($mounted.find('.category-info ul li:nth-child(3) .category-info__faq-content').exists()).toBe(false);
    $mounted.find('.category-info ul li:nth-child(3)').trigger('click');
    expect($mounted.find('.category-info ul li:nth-child(3) .category-info__faq-content').exists()).toBe(true);
  });
});
