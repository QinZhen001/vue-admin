const Koa = require("koa")
const json = require("koa-json")
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

const {tokenMiddleware} = require("./utils/token")

const app = new Koa()


onerror(app)

app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(tokenMiddleware)

// routes
const index = require("./routes/index")
