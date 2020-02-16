import Vue from "vue"
import Router from "vue-router"


Vue.use(Router)


const Home = () => import(/* webpackChunkName: "Home" */'../views/Home.vue')
const Login = () => import(/* webpackChunkName: "Login" */"../views/Login.vue")
const Register = () => import(/* webpackChunkName: "Register" */"../views/Register.vue")
const Test = () => import(/* webpackChunkName: "Test" */"../views/Test.vue")
const Layout = () => import(/* webpackChunkName: "Layout" */"../views/Layout.vue")

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes =
    [
        {
            path: "/redirect",
            component: Layout,
            children: [
                {
                    // TODO 动态子路由
                    path: ":path(.*)",
                    component: () => import("@/views/Redirect.vue")
                }
            ]
        },
        {
            path: "/home",
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
        },
        {
            path: "/test",
            name: "test",
            component: Test,
            meta: {
                requiresAuth: true
            },
        },
        {
            path: '/404',
            component: () => import('@/views/404.vue'),
            hidden: true
        },
        {
            path: '/401',
            component: () => import('@/views/401.vue'),
            hidden: true
        },
        {
            path: "/",
            redirect: "/dashboard",
            component: Layout,
            children: [
                {
                    path: "dashboard",
                    component: () => import("@/views/Dashboard.vue")
                }
            ]
        }
    ]


/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
    {
        name: 'Permission',
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        meta: {
            title: 'Permission',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
            {
                path: "page",
                component: () => import("@/views/Permission.vue"),
                meta: {
                    title: 'Page Permission',
                    roles: ['admin'] // or you can only set roles in sub nav
                }
            }
        ]
    },
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}


export default router