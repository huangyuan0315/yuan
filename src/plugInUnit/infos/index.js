import Infomation from './infomation.vue'
import info from './infomation'

export default (Vue) => {
  Vue.component(Infomation.name, Infomation)
  Vue.prototype.$info = info
}