import Vue from 'vue'
import Vuex from 'vuex'
import seller from './modules/seller'
import goods from './modules/goods'
import ratings from './modules/ratings'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{

    },
    modules:{
        seller,
        goods,
        ratings
    }
})