import Vue from 'vue'
import captcha from '~/assets/js/captcha'
import Toast from '~/assets/js/toast'
import Cookies from 'js-cookie'

Vue.use({
  install(Vue) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$captcha = captcha

    Vue.prototype.$toast = Toast
  }
})
