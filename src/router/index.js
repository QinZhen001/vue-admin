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
    redirect: "/directive/clickoutside",
    meta: { title: "自定义命令"},
    children: [
      {
        path: "clickoutside",
        name:"directive-clickoutside",
        component: () => import("@/views/directives/clickoutside"),
        meta: { title: "clickoutside" },
      },
      {
        path: "repeatclick",
        name:"directive-repeatclick",
        component: () => import("@/views/directives/repeatclick"),
        meta: { title: "repeat-click" },
      },
    ],
  },
  // 自定义组件
  {
    path:"/component",
    component: Layout,
    redirect: "/component/marquee",
    meta: { title: "自定义组件"},
    children:[
      {
        path:"marquee",
        name:"component-marquee",
        component: () => import("@/views/marquee/index"),
        meta: { title: "跑马灯" },
      },
    ]
  },
  // 移动端手机
  {
    path:"/mobile",
    component: Layout,
    redirect: "/mobile/animation",
    meta: { title: "移动端手机"},
    children:[
      {
        path:"animation",
        name:"mobile-animation",
        component: () => import("@/views/mobile/index"),
        meta: { title: "动画" },
      },
    ]
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
