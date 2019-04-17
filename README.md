# vuex-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Learn about Vuex
## VueX
是一个针对于Vue.js的状态管理框架，基于Flux.

有几个概念：

    store
    state       定义属性（状态）
    getters     获取属性
    actions     定义方法(流程判断或者异步请求)
    commit      提交变化，修改属性的唯一方法就是显示的commit mutations
    mutations   定义变化，必须是同步函数
    
    
[官方图](https://vuex.vuejs.org/vuex.png)

### 配置
在main.js中<code>import store</code>,在new Vue({})中配置store选项,vue就会把这个store实例注入到所子组件中。<b>子组件中就可以通过<code>this.$store</code>来访问。</b>

### 子组件访问store对象的方式
1. 通过this.$store来访问
2. 通过复合函数mapState(获取状态)、mapGetters(获取getters)、mapActions(获取方法)、mapMutations(获取mutations)来访问

### getter不缓存
getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。

### mutation必须同步执行

### actions里可以异步执行
同样也支持payload和对象方式进行分发

## Modules
vuex使用单一状态树，如果应用本身很复杂的话,store文件就会很臃肿。所以需要modules分成几个模块。每个模块中会有state、getters、mutations、actions，根模块也可以有自己的state、getter、mutations、actions等。

store文件结构可以如下所示：
```
|-store
    |-index.js
    |-state.js
    |-getters.js
    |-mutations.js
    |-actions.js
    |-modules//分为多个模块，每个模块拥有自己的getters等等。
        |-user.js
        |-cart.js
        |-goods.js
```
export default new Vuex.Store{
    getters,
    actions,
    modules:{
        user
    }
}

[官方购物车案例](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)

### Vuex需要遵守的规则：
1. 应用级的所有状态都集中存储到单个store对象中
2. 提交mutation是更改状态的唯一方法，并且是同步操作
3. 异步逻辑放到actions中