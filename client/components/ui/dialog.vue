<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    width="90%"
  >
    <slot />
    <ui-icon
      icon="modal-window-close"
      @click="$emit('hideDialog')"
    />
    <slot
      name="footer"
      class="dialog-footer"
    />
  </el-dialog>
</template>

<script>
import UiIcon from '~/components/ui/icon';
import ElDialog from 'element-ui/lib/dialog.js';

export default {
  components: {
    UiIcon,
    ElDialog,
  },
  props: {
    showdialog: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },

  computed: {
    visible: {
      get() {
        return this.showdialog;
      },
      set() {
        this.$emit('hideDialog');
      },
    },
  },

  methods: {
    confirm() {
      this.$emit('setlocale');
      this.visible = false;
    },
  },
};
</script>

<style lang="scss">
@import "element-ui/packages/theme-chalk/src/dialog.scss";

.el-dialog {
  max-width: 500px !important;
}

.el-dialog__header {
  padding-right: 35px;
}

.el-dialog__title {
  font-size: $font-size-h4;
  font-weight: $font-weight-bold;
}

.el-dialog__body {
  padding: 10px 20px 30px 20px;
}

.ui-icon-modal-window-close {
  color: #000;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
}

.el-icon-close {
  height: 20px !important;
  width: 20px !important;
}

@include media-breakpoint-down("sm") {
  .el-dialog__wrapper {
    padding: 10px 10px;
  }
}
</style>
