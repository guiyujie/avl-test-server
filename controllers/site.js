var router = require('koa-router')()
let knex = require('../db')

router.get('/search', async (ctx) => {
  let { weekday, time, page } = ctx.query
  let query = [], args = [];
  if (weekday)
    query.push(`day${weekday}!='Closed'`)

  count = (await knex('restaurant').where(knex.raw(query.join(" "), args)).count())[0].count
  result = await knex.select('*').from('restaurant').where(knex.raw(query.join(" "), args)).limit(10).offset((page - 1) * 10)

  ctx.body = {
    page,
    total: count,
    result
  }
})




module.exports = router