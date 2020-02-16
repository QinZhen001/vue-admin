import storage from 'good-storage'

import { getInfo } from "../../axios/index"

const state = {
    user: {
        username: storage.get("username"),
        token: storage.get("token"),
        roles: []
    }
}


const getters = {}

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

const actions = {
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(res => {
                commit()
            })
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












