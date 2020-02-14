import instance from "./config"


export default {
    // 用户登录
    userLogin(data) {
        return instance.post("/api/user/login", data)
    },
    // 用户注册
    userRegister(data) {
        return instance.post("/api/user/register", data)
    }

}






