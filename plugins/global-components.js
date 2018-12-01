import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common'
import Element from 'element-ui/lib/element-ui.common'
import Icon from 'vue-awesome/components/Icon.vue'
import BangumiSearch from '~/components/search/BangumiSearch'
import Pagination from '~/components/Pagination'
import Dialog from '~/components/Dialog'
require('vue-awesome/icons')

Vue.component('v-icon', Icon)
Vue.use(Element)
Vue.component(VeLine.name, VeLine)
Vue.component(BangumiSearch.name, BangumiSearch)
Vue.component(Pagination.name, Pagination)
Vue.component(Dialog.name, Dialog)
