// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(iView)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentTab: 'banner'
  },
  mutations: {
    'tabChange': (state, curTab) => {
      state.currentTab = curTab
    }
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  components: { App }
})
