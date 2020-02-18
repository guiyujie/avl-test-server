const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const koajwt = require('koa-jwt')
const response = require('./response.js')
const app = new Koa()
const config = require('./config')

// 使用响应处理中间件
app.use(response)

app.use(koajwt({
  secret: config.token.privateKey
}).unless({
  path: ['/api/user/login']
}));
// 解析请求体
app.use(bodyparser())

// 使用cors
app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'HEAD', 'OPTIONS', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

let composeRouter = require('./middleware/composeRouter');

//路由中间件
app.use(composeRouter(__dirname + '/controllers').routes());

// 启动程序，监听端口

app.listen(8888, () => { console.log('服务器启动成功') })

