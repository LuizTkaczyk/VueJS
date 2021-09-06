//criado apos criar adicionar o vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../components/AppSectionBanner'
import News from './../components/AppSectionNews'
import Notice from './../components/AppSectionNewsNotice'
import ErrorNotFound from './../components/App404'

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass:'link-active',//destacando o link ativo doo AppHeader
    routes:[{
        path:'/',
        component: Home,
        
    },{
        path:'/news',
        alias:'/notice',
        component:News
    },{
        path:'/news/:idnotice',
        component: Notice,
        name: 'notice',
        beforeEnter:(to, from, next)=>{ //guarda de rota local

            next()
        }
    },{
        path:'/admin',//impedindo o usuario de acessar uma página de administrador com o redirect
        redirect:'/'
    },{
        path:'*', //direciona para uma página de erro, caso o endereço digitado não exista
        component:ErrorNotFound
    }
]

})