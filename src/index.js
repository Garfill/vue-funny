import Aniplex from '../packages/Aniplex/index.js'
import Mark from '../packages/Mark/index.js'
import Verify from '../packages/Verify/index.js'

const components = [
  Aniplex,
  Mark,
  Verify,
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Aniplex,
  Mark,
  Verify,
}