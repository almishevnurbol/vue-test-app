import Vue from 'vue'
import Vuex from 'vuex'
import PackageModel from '../../entities/package/model/packages'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        PackageModel
    }
})