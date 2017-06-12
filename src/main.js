// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import './theme/index.less'

import Vue from 'vue'
import App from './App'
import iView from 'iview'
import Vuex from 'vuex'
// import 'iview/dist/styles/iview.css'
// import './index.less'
import _ from 'lodash'
import axios from 'axios'
import config from './config/config'


Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
Vue.use(iView)
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        modules: [],
        products: [],
        modulesList: null,
        showDetail: false,
        currentModule: '',
        moduleDetail: {},
        currentProduct: '',
        moduleTypes: [],
        currentModuleTypes: [],
        config: config,
        showSearchResult: false,
        showHorTabs : false
    },
    getters: {
        moduleDetail: state => {
            let modules = state.modules
            return modules.filter((module) => {
                return module.type == state.currentModule
            })[0]
        }
    },
    mutations: {
        'init': (state, data) => {
            state.products = data.products
            state.moduleTypes = data.moduleType
            state.modules = data.modules
            state.currentProduct = data.products[0]
            state.currentModuleTypes = data.moduleType[data.products[0]]
        },
        /**
         * 水平tab切换 即moduleType的变化
         */
        'moduleTypeChange': (state, curModuleType) => {
            state.showSearchResult = false
            state.currentModuleType = curModuleType
            state.modulesList = state.modules.filter((module) => {
                return module.product == state.currentProduct && module.moduleType == curModuleType
            })
        },
        /**
         * 左侧Menu的切换
         * 即不同产品的切换
         */
        'productChange': (state, curProduct) => {
            state.showSearchResult = false
            state.currentProduct = curProduct
            state.currentModuleTypes = state.moduleTypes[curProduct]
            state.modulesList = state.modules.filter((module) => {
                return module.product == curProduct && module.moduleType == state.currentModuleTypes[0]
            })
        },
        /**
         * 单击module显示其详细信息
         */
        'listClick': (state, currentModule)　 => {
            let result = []
            state.currentModule = currentModule
            result = state.modules.filter((module) => {
                return module.type == currentModule
            })
            state.moduleDetail = result.length > 0 ? result[0] : {}
            state.showDetail = true
        },
        'moduleClick': (state, moduleId) => {
            // debugger
            state.moduleDetail = state.modules.filter( module => {
                return new RegExp(moduleId, 'i').test(module.type)
            })[0]
            state.showDetail = true
        },
        'closeModal': (state) => {
            state.showDetail = false
        },
        'hideSearchResult': (state) => {
            state.showSearchResult = false
        }
    }
})

new Vue({
    el: '#app',
    template: '<App/>',
    store: store,
    created() {
        this.init()
    },
    methods: {
        init() {
            this.$http.get('http://localhost:49000/pscpub/modulemarket/scaffold/config/docConfig.json').then((result) => {
                let data = result.data
                store.commit('init', data)
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    components: {
        App
    }
})
