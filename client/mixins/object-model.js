function objectAttributeModel(key) {
  return {
    get() {
      return this.value[key];
    },
    set(val) {
      this.$emit('input', { ...this.value, [key]: val });
    },
  };
}

export default (props) => ({
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: props.reduce((propModels, prop) => ({ ...propModels, [prop]: objectAttributeModel(prop) }), {}),
});
