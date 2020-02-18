
module.exports = async (ctx, next) => {
  try {
    // 调用下一个 middleware      
    await next()
    // 处理响应结果      
    // 如果直接写入在 body 中，则不作处理      
    // 如果写在 ctx.body 为空，则使用 state 作为响应      
    ctx.body = ctx.body ? ctx.body : {
      code: ctx.state.code !== undefined ? ctx.state.code : 0,
      data: ctx.state.data !== undefined ? ctx.state.data : {}
    }
  } catch (e) {
    // 输出详细的错误信息    
    ctx.status = e.status ? e.status : 200
    ctx.body = {
      code: e.status,
      error: e && e.message ? e.message : e.toString()
    }
  }
}