import types from '../types'
import axios from 'axios'
export default{
    state:{
        seller:{}
    },
    getters:{
        seller(state){
            return state.seller
        }
    },
    actions:{
        getSeller(context){
            axios.get('/api/seller').then(res=>{
                if(res.data.errno==0){
                    context.commit(types.GET_SELLER,res.data.data)
                }
            })
        }
    },
    mutations:{
        [types.GET_SELLER](state,payload){
            state.seller=payload
        }
    }
}