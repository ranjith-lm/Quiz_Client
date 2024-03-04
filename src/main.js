 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.directive('highlight',{
  bind(el,binding,vnode){
    var delay = 0;
   if(binding.modifiers['delayed']) {
     delay = 3000;
   }
   setTimeout(() => {
    if(binding.arg == 'background'){
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
   },delay);
   }
   
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
