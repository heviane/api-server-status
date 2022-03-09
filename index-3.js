// https://nodejs.org/docs/latest-v15.x/api/synopsis.html#synopsis_example
const http = require('http');

const host = 'localhost'; 
const port = '3000'; 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen((process.env.PORT || port), host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
