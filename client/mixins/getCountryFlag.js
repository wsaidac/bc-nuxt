export default {
  methods: {
    getCountryFlag(country) {
      if (country.toLowerCase() === 'uk') {
        return 'gb';
      }

      return country.toLowerCase();
    },
  },
};
