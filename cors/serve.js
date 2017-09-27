const http = require('http')

http.createServer((request, response) => {
  // 允许跨域
  response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'})

  // 发送响应数据 "Hello World"
  response.end('{a: "a"}')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/')
