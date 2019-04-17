import types from '../types'
import axios from 'axios'
export default{
    state:{
        seller:{},
        detailShow:false
    },
    getters:{
        seller(state){
            return state.seller
        },
        detailShow(state){
            return state.detailShow
        }
    },
    actions:{
        getSeller(context){
            axios.get('/api/seller').then(res=>{
                if(res.data.errno==0){
                    context.commit(types.GET_SELLER,res.data.data)
                }
            })
        },
        showDetail(context){
            context.commit(types.SHOW_DETAIL)
        },
        hideDetail(context){
            context.commit(types.HIDE_DETAIL)
        }
    },
    mutations:{
        [types.GET_SELLER](state,payload){
            state.seller=payload
        },
        [types.SHOW_DETAIL](state){
            state.detailShow=true
        },
        [types.HIDE_DETAIL](state){
            state.detailShow=false
        }
    }
}