import Mark from './src/main.vue';

Mark.install = function(Vue) {
  Vue.component(Mark.name, Mark);
};

export default Mark;