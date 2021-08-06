// 导入koa2
let koa = require("koa")
// 导入中间件
let koa_response_duration = require("./middleware/koa_response_duration")
let koa_response_header = require("./middleware/koa_response_header")
let koa_response_data = require("./middleware/koa_response_data")
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
app.listen(8888, () => {
    console.log("服务器启动成功，请访问localhost:8888")
})

const WebSocketService = require("./service/web_socket_service")
// 开启服务端的监听，监听客户端的连接
// 当某一个客户端连接成功之后，就会对这个客户端进行 message 事件的监听
WebSocketService.listen()
