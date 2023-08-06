// веб сервер на node.js

const http = require("http");

const hostname = "127.0.0.1"; //домен
const port = 3000; //порт

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// node js.node.js - для запуска сервера
// ctrl + C - для остановки сервера
