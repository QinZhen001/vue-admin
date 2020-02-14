import Vue from "vue"
import Vuex from "vuex"
import storage from 'good-storage'


import userInfo from "./module/userInfo"

Vue.use(Vuex)

const state = {
    user: {
        username: storage.get("username"),
        token: storage.get("token")
    }
}

const mutations = {
    saveUser(state, data) {
        state.user.token = data.token
        state.user.username = data.username

        // 数据存入localStorage
        storage.set("username", data.username)
        storage.set("token", data.token)

    
    },
    removeUser(state) {
        state.user.username = ""
        state.user.token = ""

        storage.remove("username")
        storage.remove("token")
    }
}


export default new Vuex.Store({
    modules: {
        userInfo
    },
    state,
    mutations
})
