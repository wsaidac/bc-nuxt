export default {
  data() {
    return {
      passwordVisible: false,
    };
  },

  computed: {
    passwordInputType() {
      return this.passwordVisible ? 'text' : 'password';
    },
  },

  methods: {
    togglePassword() {
      this.passwordVisible = !this.passwordVisible;
      this.$emit('toggle-password');
    },
  },
};
