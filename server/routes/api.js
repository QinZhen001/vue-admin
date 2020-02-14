const router = require("koa-router")()
const { register, login } = require('../controller/user')

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




module.exports = router