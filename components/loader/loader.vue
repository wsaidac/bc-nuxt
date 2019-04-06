<template>
  <div
    v-if="hasContextChanged"
    class="global-loader"
  >
    <div class="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('async', ['hasContextChanged']),
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>


<style lang="scss">
.global-loader {
  background: $white;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 999;
}

.lds-roller {
  display: inline-block;
  height: 64px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 45%;
  width: 64px;
  z-index: 1212121;
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
}

.lds-roller div::after {
  background: $primary-base;
  border-radius: 50%;
  content: " ";
  display: block;
  height: 6px;
  margin: -3px 0 0 -3px;
  position: absolute;
  width: 6px;
}

.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}

.lds-roller div:nth-child(1)::after {
  left: 50px;
  top: 50px;
}

.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}

.lds-roller div:nth-child(2)::after {
  left: 45px;
  top: 54px;
}

.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}

.lds-roller div:nth-child(3)::after {
  left: 39px;
  top: 57px;
}

.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}

.lds-roller div:nth-child(4)::after {
  left: 32px;
  top: 58px;
}

.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}

.lds-roller div:nth-child(5)::after {
  left: 25px;
  top: 57px;
}

.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}

.lds-roller div:nth-child(6)::after {
  left: 19px;
  top: 54px;
}

.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}

.lds-roller div:nth-child(7)::after {
  left: 14px;
  top: 50px;
}

.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}

.lds-roller div:nth-child(8)::after {
  left: 10px;
  top: 45px;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
