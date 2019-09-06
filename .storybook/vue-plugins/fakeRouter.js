import { action } from '@storybook/addon-actions';


export default {
  install(Vue) {
    Vue.prototype.$router = {
      push: val => val
    }

    Vue.prototype.localePath = val => {
      action('router')(`/en-us${val}`)
      return `/en-us/${val}`
    }

    Vue.prototype.$route = {
      path: `/en-us/netflix/`
    }

  }
}
