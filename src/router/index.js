import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../views/Home.vue");
const Login = () => import("../views/Login.vue");
const Register = () => import("../views/Register.vue");
const Test = () => import("../views/Test.vue");
const Layout = () => import("../layout/index.vue");
// const Dashboard = () => import("/src/views/dashboard/index.vue")


// 和侧边栏有关的
let boardRoutes = [
  // 面板   
  {
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "面板"},
      },
    ],
  },
  // 自定义命令
  {
    path: "/directive",
    component: Layout,
    redirect: "/directive/index",
    meta: { title: "自定义命令"},
    children: [
      {
        path: "index",
        name:"directive",
        component: () => import("@/views/directives/index"),
        meta: { title: "自定义命令1" },
      },
      {
        path: "index2",
        name:"directive2",
        component: () => import("@/views/directives/index"),
        meta: { title: "自定义命令2" },
      },
    ],
  },
]


boardRoutes  = boardRoutes.map(item => ({
    ...item,
    meunRoute:true 
}))


/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    ...boardRoutes,
//   {
//     path: "/redirect",
//     children: [
//       {
//         // TODO 动态子路由
//         path: ":path(.*)",
//         component: () => import("@/views/Redirect.vue"),
//       },
//     ],
//   },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/401.vue"),
    hidden: true,
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    name: "Permission",
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    meta: {
      title: "Permission",
      icon: "lock",
      roles: ["admin", "editor"], // you can set roles in root nav
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/Permission.vue"),
        meta: {
          title: "Page Permission",
          roles: ["admin"], // or you can only set roles in sub nav
        },
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: Test,
    meta: {
      roles: ["admin"],
    },
  },
  {
    path: "/ppp",
    component: () => import("@/views/Permission.vue"),
    meta: {
      title: "Page Permission",
      roles: ["test"],
    },
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
