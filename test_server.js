var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome');
}).listen(3001, "serverip");
console.log('Server running at http://10.0.2.10:3001/');
