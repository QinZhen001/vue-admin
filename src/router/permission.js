import router from "./index"
import store from "../store"
import { Message } from 'element-ui'


const whiteList = [
  "/login",
  "/register",
  // TODO:开发期间设置白名单
  "/dashboard"
]



router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token
  if (token) {
    // 有token
    if (to.path === "/login") {
      next({ path: "/" })
    } else {
      const roles = store.getters.roles
      if (roles && roles.length) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch("user/getInfo")
          // 获取动态路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // debugger
          router.addRoutes(accessRoutes)
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          await store.commit('user/removeUser')
          Message.error(error || 'Has Error')
          // 重新登录
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在白名单
      next()
    } else {
      // 不在白名单
      next(`/login?redirect=${to.path}`)
    }
  }
})














