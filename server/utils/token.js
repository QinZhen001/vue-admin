const jwt = require('jsonwebtoken');

const { TOKEN_ENCODE_STR, WHILE_URLS } = require("../config/index")

function test() {
    let rrr = createToken({ username: "aaa" })
    console.log("rrr", rrr)
    let res = jwt.verify(rrr, TOKEN_ENCODE_STR);
    console.log("res", res)
}

/**
 * 
 * 查询数据库，检验token是否过期,检验token是否和当前账户匹配
 */
function checkToken({ username, token }) {
    console.log("checkToken",username,token)
    // 简略数据库的相关操作
    return !!username
}


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
    console.log(url)
    if (ctx.method != "GET" && !WHILE_URLS.includes(url)) {
        const token = ctx.get("Authorization")
        console.log("token1", token)
        if (!token) {
            // 抛出错误
            ctx.response.status = 401
            ctx.response.body = {
                msg: "你还没有登录，快去登录吧!"
            };
            return
        }
        const { username = "" } = jwt.verify(token, TOKEN_ENCODE_STR);

        // console.log("username",username)

        if (!checkToken({
            username,
            token
        })) {
            ctx.response.status = 401;
            ctx.response.body = {
                msg:"登录已过期请重新登录!"
            };
        }
    }
    await next()
}



module.exports = {
    createToken,
    tokenMiddleware,
    test
}
