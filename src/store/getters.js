 const getters = {
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  permissionRoutes: state => {
      return state.permission.routes
  },
  sidebar: state => state.app.sidebar,
  device:state => state.app.device,
}


export default getters