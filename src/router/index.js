import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/Goods'
import Seller from '@/components/Seller'
import Comment from '@/components/Comment'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/goods',
            name:'Goods',
            component:Goods
        },
        {
            path:'/seller',
            name:'Seller',
            component:Seller
        },
        {
            path:'/comment',
            name:'Comment',
            component:Comment
        }
    ]
})