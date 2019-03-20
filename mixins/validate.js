import {
  required, between, minLength, maxLength, sameAs,
} from 'vuelidate/lib/validators';

function vuelidatify(name) {
  return ({ validator, options }) => {
    const optionsObj = Object.assign({}, ...options.map(({ key, value }) => ({ [key]: value })));

    if (validator === 'presence') {
      return { required };
    } if (validator === 'length' && optionsObj.minimum && optionsObj.maximum) {
      return { between: between(optionsObj.minimum, optionsObj.maximum) };
    } if (validator === 'length' && optionsObj.minimum) {
      return { minLength: minLength(optionsObj.minimum) };
    } if (validator === 'length' && optionsObj.maximum) {
      return { maxLength: maxLength(optionsObj.maximum) };
    } if (validator === 'confirmation') {
      return { sameAs: sameAs(name.replace('Confirmation', '')) };
    }
    return {};
  };
}

function validationsMapper(name, validations) {
  return Object.assign({}, ...validations.map(vuelidatify(name)));
}

function transform(introspectModel, attributes) {
  return Object.assign({}, ...introspectModel.attributes
    .filter(({ name }) => attributes.indexOf(name) !== -1)
    .map(({ name, validations }) => ({ [name]: validationsMapper(name, validations) })));
}

export default (field, attributes) => ({
  validations() {
    return {
      [field]: transform(this.$store.getters['introspection/models'][field], attributes),
    };
  },

  methods: {
    $error(attr) {
      const v = this.$v[field][attr];

      const graphQLErrors = this.$graphQLErrors
        && this.$graphQLErrors.find(error => error.path
          && error.path[0] === field && error.path[1] === attr);

      if (!this.$v.$anyDirty && graphQLErrors) {
        return this.$t(`validations.${graphQLErrors.message}`);
      }

      if (v.$error === false) {
        return null;
      }

      const validators = ['required', 'minLength', 'maxLength', 'between', 'sameAs'];
      for (let i = 0; i < validators.length; i++) {
        const validator = validators[i];
        if (v[validator] === false) {
          return this.$t(`validations.${validator}`, v.$params[validator]);
        }
      }

      return null;
    },
  },
});
