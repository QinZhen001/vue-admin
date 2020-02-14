const crypto = require('crypto');
const xss = require('xss')

const { PWD_ENCODE_STR } = require("../config/index")
const { createToken } = require("../utils/token")

async function register(ctx, next) {
    let { username = "", password = "", re_password = "" } = ctx.request.body
    if (!username || !password || !re_password) {
        ctx.status = 401
        ctx.body = {
            code: 401,
            msg: "注册失败，请填写完整表单!"
        }
        return;
    }
    if (password.length < 6) {
        ctx.status = 401
        ctx.body = {
            code: 401,
            msg: "注册失败，密码最少6位"
        }
        return;
    }
    if (password !== re_password) {
        ctx.status = 401
        ctx.body = {
            code: 401,
            msg: "注册失败，2次密码输入不一致"
        }
        return
    }
    let res = await _findUserByName(username)
    if (res) {
        ctx.body = {
            code: 409,
            msg: '注册失败，登录账号重复了，换一个吧！'
        }
        return
    }
    // 对密码加盐加密
    password =
        crypto.createHmac('sha256', PWD_ENCODE_STR)
            .update(password)
            .digest("hex")
    // console.log("cryptoPassword", cryptoPassword)
    // 防止xss攻击
    username = xss(username)
    // const token = createToken({ username })
    // 存入数据库
    await _saveUser({ username, password })

    ctx.body = {
        code: 200,
        msg: "注册成功!",
        data: {
            username, password
        }
    }

    await next()
}

async function login(ctx, next) {
    let { username = "", password = "" } = ctx.request.body
    if(!username || !password){
        ctx.body = {
            code: 401,
            msg: "登录失败，请输入登录账号或密码!"
        }
        return
    }
    password =  crypto.createHmac('sha256', PWD_ENCODE_STR)
    .update(password)
    .digest("hex")
    // 在数据库中查找用户
    let res = await _findUser({username,password})
    if(!res){
        ctx.body = {
            code: 401,
            msg: '登录失败，用户名或者密码错误!'
          }
          return;
    }
    // 生成token
    const token = createToken({username})

    ctx.body = {
        code: 200,
        msg: "登录成功!",
        data: {
          username,  
          token
        }
      }

    await next()
}



//    ----------- 内部模块 ------------

async function _findUser({username,password}){
    return true 
}

/**
 * 在数据库中查找 判断用户是否已经存在
 * @param {*} username 
 */
async function _findUserByName(username) {
    return false
}

async function _saveUser({ username, password, token }) {
    console.log(
        "_saveUser",
        username,
        password,
        token
    )
    return true
}


module.exports = {
    register,
    login
}