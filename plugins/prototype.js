import Vue from 'vue'
import captcha from '~/assets/js/captcha'
import Toast from '~/assets/js/toast'

Vue.use({
  install(Vue) {
    Vue.prototype.$captcha = captcha

    Vue.prototype.$toast = Toast
  }
})
