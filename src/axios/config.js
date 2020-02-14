import axios from "axios"
import store from "../store";

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use(
    config => {
        // 每次发送请求，检查 vuex 中是否有token,如果有放在headers中
        if (store.state.user.token) {
            config.headers.Authorization = store.state.user.token;
        }
    },
    err => {
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response => response,
    err => {
        console.error("axios.interceptors.response.use",err)
        let {response} = err 
        if(response.status == 401){
            // Unauthorized
            let msg = response.data || '请重新登录!';
            alert(msg)
            // 清除token
            // 重定向 
        }else{
            console.error(err);
        }
    }    
)



const instance = axios.create()


export default instance








