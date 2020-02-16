import storage from 'good-storage'

// import { getInfo } from "../axios/index"

const state = {
    username: storage.get("username"),
    token: storage.get("token"),
    roles: []
}


const getters = {}

const mutations = {
    saveUser(state, data) {
        state.token = data.token
        state.username = data.username

        // 数据存入localStorage
        storage.set("username", data.username)
        storage.set("token", data.token)


    },
    removeUser(state) {
        state.username = ""
        state.token = ""

        storage.remove("username")
        storage.remove("token")
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions = {
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            // todo 发起网络请求查询用户信息
            // 这里省略
            let data = {
                roles: ["admin"]
            }
            commit("SET_ROLES", data.roles)
            resolve(data)
        })
    }
}


export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}












