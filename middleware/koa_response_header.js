// 设置响应头的中间件 设置响应头中间件
module.exports = async (ctx, next) => {
  let result = await next()
}