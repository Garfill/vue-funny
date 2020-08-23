import Aniplex from '../packages/Aniplex/index.js'

const components = [
  Aniplex,
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Aniplex,
}