import types from '../types'
import axios from 'axios'

export default{
    state:{
        goods:{}
    },
    getters:{
        goods(state){
            return state.goods
        }
    },
    actions:{
        getGoods(context){
            axios.get('/api/goods').then(res=>{
                console.log(res)
                if(res.data.errno==0){
                    context.commit(types.GET_GOODS,res.data.data)
                }
            })
            
        }
    },
    mutations:{
        [types.GET_GOODS](state,payload){
            state.goods=payload
        }
    }
}