const jwt = require('jsonwebtoken');
const jwtAuth = require("koa-jwt");

const { TOKEN_ENCODE_STR, WHILE_URLS } = require("../config/index")

function createToken(data = {}) {
    return jwt.sign(data, TOKEN_ENCODE_STR, { expiresIn: '1h' })
}

/**
 * token验证的中间件
 * （验证所有非get请求 和 非 白名单url 请求） 
 * @param {*} ctx 
 * @param {*} next 
 */
async function tokenMiddleware(ctx, next) {
    const url = ctx.url
    if (ctx.method != "GET" && !WHILE_URLS.includes(url)) {
        const token = ctx.get("Authorization")
        if (!token) {
            // 抛出错误
            ctx.response.status = 401
            ctx.response.body = {
                msg: "你还没有登录，快去登录吧!"
            };
        }
        const data = jwt.verify(token, TOKEN_ENCODE_STR);
        console.log("data", data)
    }
    next()
}



module.exports = {
    createToken,
    tokenMiddleware
}
