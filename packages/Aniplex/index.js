import Aniplex from './src/main.vue';

Aniplex.install = function(Vue) {
  Vue.component(Aniplex.name, Aniplex);
};

export default Aniplex;