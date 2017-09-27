const http = require('http')

http.createServer(function (request, response) {
  var queryStr = request.url.split('?')[1]
  var queryParam = ''
  if (!queryStr) {
    return
  }
  if (queryStr.length > 0) {
    var querys = queryStr.split('&')
    querys.forEach((item, index) => {
      if (item.indexOf('cb') !== -1) {
        queryParam = item.split('=')[1]
      }
    })
  }

  if (queryParam !== '') {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'})

    // 发送响应数据 "Hello World"
    response.end(queryParam + '({a: "a"})')
  }
}).listen(8888)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/')
