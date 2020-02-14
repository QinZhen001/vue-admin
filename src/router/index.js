import Vue from "vue"
import Router from "vue-router"
import store from "../store"

Vue.use(Router)


const Home = () => import('../view/Home.vue')
const Login = () => import("../view/Login.vue")
const Register = () => import("../view/Register.vue")


const router = new Router({
    routes: [
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        }
    ]
})


// 全局路由钩子
router.beforeEach((to, form, next) => {
    console.log("token111",store.state.user.token)
    //获取store里面的token
    let token = store?.state?.user?.token
    // 判断去的路由需不需要token
    if (to.meta.requiresAuth) {
        if (token) {
            next()
        } else {
            debugger
            next({
                // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
                path: "/login",
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})



export default router