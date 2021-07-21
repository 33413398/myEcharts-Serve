// 导入koa2
let koa = require('koa')
// 导入中间件
let koa_response_duration = require('./middleware/koa_response_duration')
let koa_response_header = require('./middleware/koa_response_header')
let koa_response_data = require('./middleware/koa_response_data')
// 注册koa2实例
let app = new koa()
// 挂载对应的中间件
// 计算服务器消耗时长的中间件
app.use(koa_response_duration)
// 设置响应头的中间件 设置响应头中间件
app.use(koa_response_header)
// 处理业务逻辑中间件，读取某个json文件的数据
app.use(koa_response_data)
// 监听端口
app.listen(8888)