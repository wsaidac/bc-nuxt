export default {
  state() {
    return {
      aboutUs: { title: 'About us', url: '/about-us', component: 'AboutUs' },
      paymentMethods: { title: 'Payment options', url: '/payment-methods', component: 'PaymentMethods' },
      help: { title: 'Help', url: '/help' },
      privacyPolicy: { title: 'Privacy Policy', url: '/privacy-policy', component: 'PrivacyPolicy' },
      termsAndConditions: { title: 'Conditions', url: '/general-conditions', component: 'TermsAndConditions' },
    };
  },
};
