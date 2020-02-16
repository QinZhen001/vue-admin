import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/)
console.log('modulesFiles: ', modulesFiles);

// debugger

const modules = modulesFiles.keys().reduce((modules, modulePath) => {

    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    console.log("moduleName", moduleName, value)
    modules[moduleName] = value.default
    return modules
}, {})


const getters = {
    roles: state => state.user.roles,
    permissionRoutes: state => {
        return state.permission.routes
    },
}




export default new Vuex.Store({
    modules,
    getters
})
