const router = require("koa-router")()
const { register, login } = require('../controller/user')


router
    .get("/", async (ctx, next) => {
        ctx.body = "hello world! "

    })
    .post("/api/user/register", register)
    .post("/api/user/login", login)




module.exports = router 