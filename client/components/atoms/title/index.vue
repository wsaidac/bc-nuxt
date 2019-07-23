<script>
import VueTypes from 'vue-types';

const availableColors = ['primary', 'secondary', 'tertiary', 'gray-black', 'gray-dark', 'black', 'wthie'];
const availableTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  name: 'Title',
  props: {
    type: VueTypes.oneOf(availableTypes).def('h1'),
    color: VueTypes.oneOf(availableColors).def('primary'),
    light: Boolean,
    underline: Boolean,
    spacingClasses: VueTypes.string.def(''),
  },
  data() {
    return {
      fontSizeClassName: this.buildFontSizeClassName(),
      fontWeightClassName: this.buildFontWeightClassName(),
      underlineClassName: this.buildUnderlineClassName(),
    };
  },
  methods: {
    buildFontSizeClassName() {
      const { type } = this;
      const fontSize = {
        h1: 'text-3xl lg:text-6xl font-bold',
        h2: 'text-2xl lg:text-5xl',
        h3: 'text-3lg lg:text-4xl',
        h4: 'text-base lg:text-lg leading-tight',
        h5: 'text-xs leading-relaxed',
      };
      return fontSize[type] || fontSize.h1;
    },

    buildFontWeightClassName() {
      const { light, type } = this;
      if (type !== 'h4' && type !== 'h5') {
        return '';
      }
      return light ? 'font-light' : 'font-medium';
    },
    buildUnderlineClassName() {
      const { underline, type } = this;
      if (type !== 'h4' && type !== 'h5') {
        return '';
      }
      return underline ? 'underline' : '';
    },
  },
  render(createElement) {
    const {
      $slots, color, fontSizeClassName, fontWeightClassName, underlineClassName, spacingClasses,
    } = this;

    const colorClassname = `text-${color}`;
    const attributes = {
      class: [
        'leading-none m-0',
        colorClassname,
        fontSizeClassName,
        fontWeightClassName,
        underlineClassName,
        spacingClasses,
      ],
    };
    const tagName = this.type;
    return createElement(tagName, attributes, $slots.default);
  },
};

</script>
