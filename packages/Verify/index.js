import Verify from './src/main.vue';

Verify.install = function(Vue) {
  Vue.component(Verify.name, Verify);
};

export default Verify;