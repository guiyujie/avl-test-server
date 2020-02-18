var router = require('koa-router')()
let knex = require('../db')
let crypto = require('crypto');
let jwt = require('jsonwebtoken');
const config = require('../config')

router.get('/login', async (ctx) => {
  let user = {
    id: "1",
    name: "zyy",
    title: "大师"
  }
  //设置token添加至头
  let token = jwt.sign(user, config.token.privateKey, { expiresIn: '1h' });
  ctx.res.setHeader('Authorization', token);
  ctx.body = user
})

router.get('/logout', async ctx => {
  ctx.body = 'site about'
})

router.get('/test', async ctx => {
  result = await knex.select('*').from('user').limit(10)
  ctx.body = result
})


module.exports = router