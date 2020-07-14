import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"

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






export default new Vuex.Store({
    modules,
    getters
})
