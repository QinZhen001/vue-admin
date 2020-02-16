const crypto = require('crypto');
const xss = require('xss')

const { PWD_ENCODE_STR } = require("../config/index")
const { createToken } = require("../utils/token")
const { User } = require("../db")


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
    let res = await User.find({ user_name: username })
    if (res.length) {
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
    const token = createToken({ username })
    // 存入数据库
    let user = new User({ user_name: username, user_pwd: password, token });
    res = await user.save();
    // console.log("user.save",res)
    if (res._id) {
        ctx.body = {
            code: 200,
            msg: "注册成功!",
            data: {
                username, token
            }
        }
    } else {
        ctx.body = {
            code: 500,
            msg: "注册失败，数据库服务器异常!"
        }
    }
    await next()
}

async function login(ctx, next) {
    let { username = "", password = "" } = ctx.request.body
    if (!username || !password) {
        ctx.body = {
            code: 401,
            msg: "登录失败，请输入登录账号或密码!"
        }
        return
    }
    password = crypto.createHmac('sha256', PWD_ENCODE_STR)
        .update(password)
        .digest("hex")
    // 在数据库中查找用户
    let res = await User.findOne({ user_name:username, user_pwd:password })
   // 更新这个用户的token
    res.token = createToken({username})
    res.save()
    // console.log("User.findOne",res)
 
    if (!res) {
        ctx.body = {
            code: 401,
            msg: '登录失败，用户名或者密码错误!'
        }
        return;
    }
    // 生成token
    const token = createToken({ username })

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

async function _findUser({ username, password }) {
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