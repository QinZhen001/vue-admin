const Koa = require("koa")
const json = require("koa-json")
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const Router = require('koa-router')


const { tokenMiddleware, test } = require("./utils/token")

// test()

const app = new Koa()
const router = new Router()

onerror(app)

app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(tokenMiddleware)

// routes
router.use('/api', require('./routes/api').routes())
app.use(router.routes())
app.use(router.allowedMethods())


// error-handling 
app.on("error", (err, ctx) => {
    console.error("server error", err, ctx)
})


module.exports = app.listen(3000, () => {
    console.log("listen!")
})