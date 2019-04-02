<template>
  <div :class="classes">
    <h4
      v-if="title"
      v-text="title"
    />
    <slot>
      <p
        v-if="message"
        v-text="message"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'UiMessage',

  props: {
    title: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
  },

  computed: {
    classes() {
      return ['ui-message'];
    },
  },
};
</script>

<style lang="scss">
.ui-message {
  border: 1px solid $gray-900;
  margin-bottom: 20px;
  padding: 20px;

  h4 {
    color: $gray-900;
    font-weight: $font-weight-bold;
    margin: 0 0 20px;
  }

  p {
    margin-top: 0;
  }
}
</style>
