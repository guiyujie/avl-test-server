let _pg = require('pg')

module.exports = require('knex')({
  client: 'pg',
  //数据库
  //postgresql://myuser:mypasswd@myhost:5432/mydb
  connection: "postgres://testuser:testpassword@150.109.49.81:5432/testdb",
  searchPath: 'public',
  pool: { min: 1, max: 7 },
  acquireConnectionTimeout: 60000
})
