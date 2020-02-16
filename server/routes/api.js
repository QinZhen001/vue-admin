const router = require("koa-router")()
const { register, login,test } = require('../controller/user')

const { createToken } = require("../utils/token")

router
    .get("/", async (ctx, next) => {
        let token = createToken({
            username: "asd"
        })
        ctx.body = token
        next()
    })
    .post("/user/register", register)
    .post("/user/login", login)
    .post("/user/test",test)




module.exports = router