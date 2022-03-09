const http = require('http'); 
// const soStatus = require('./src/soStatus');
const memoryStatus = require('./memoryStatus');
// const networkStatus = require('./src/networkStatus');

// const config = require('./src/assets/config/default.json');
// const config = require('./src/assets/config/production.json');

// TODO: Criar UI em React para consumir esta API (server-status-ui)

// console.log(config);
const host = 'localhost'; // config.server.api.host;
const port = '3000'; // config.server.api.port;

let description = '<h1>Server Status (API) in Node.js</h1>';
description += '<h3>Endpoints disponiveis:</h3>';
description += '<ul>';
// description += '<li><a href="/soStatus">/soStatus</a></li>';
description += '<li><a href="/memoryStatus">/memoryStatus</a></li>';
// description += '<li><a href="/networkStatus">/networkStatus</a></li>';
description += '</ul>';

http
// ========== Create the HTTP server (Pure Node)
	.createServer((req, res) => {
		if (req.url === '/') {
			res.end(description);
		// } else if (req.url === '/soStatus') {
		// 	res.end(JSON.stringify(soStatus, null, 2));
		} else if (req.url === '/memoryStatus') {
			res.end(JSON.stringify(memoryStatus, null, 2));
		// } else if (req.url === '/networkStatus') {
		// 	res.end(JSON.stringify(networkStatus, null, 2));			
		} else {
			res.end('<h1>Route ' + req.url + ' not allowed!</h1>');
		}
	})
// ========== Define um escutador de requisições HTTP
	// .listen(port, () => console.log(`Sever is running in ${host}:${port}`));
	.listen((process.env.PORT || port), () => {
		console.log(`Server running at http://${host}:${port}/`);
	});
	// Usado "process.env.PORT" para deploy no Heroku
