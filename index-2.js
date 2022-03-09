const http = require('http');

http
    .createServer((req, res) => {
        res.write('hello\n');  // executa sem finalizar
        res.end();  // finaliza
    })
    .listen((process.env.PORT || 3000), () => console.log('Server is running in port 3000'));
