// 处理业务逻辑中间件，读取某个json文件的数据
let path = require('path')
let backFilePath = require('../utils/file_utils')
module.exports = async (ctx, next) => {
  let pathUrl = ctx.request.url.replace('/api', '')
  pathUrl = `../data${pathUrl}.json`
  pathUrl = path.join(__dirname,pathUrl)
  try {
    let result =await backFilePath.getFileJsonData(pathUrl)
    ctx.response.body = result
  } catch (error) {
    const errorMsg = {
      message: '读取文件内容失败,资源不存在',
      status: '404'
    }
    ctx.response.body = JSON.stringify(errorMsg)
  }
  await next()
}