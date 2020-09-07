import Aniplex from '../packages/Aniplex/index.js'
import Mark from '../packages/Mark/index.js'

const components = [
  Aniplex,
  Mark
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Aniplex,
  Mark
}