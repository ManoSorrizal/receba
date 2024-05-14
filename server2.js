//variaveis de comunicação
const http = require('http'); //variável de definição do protocolo http.
const fs = require('fs'); //faz a busca do arqui de entrada e saída.
const hostname = '0.0.0.0'; //vai está informando que é essa maquina ou o nome da maquina em si.
const port = 8080;

//canal de conexão
const server = http.createServer(function(req, res){
		fs.readFile('index.html', function(err, data){
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(data);
			return res.end();
		});
});

server.listen(port, hostname,() => {
	console.log(`RECEBA NU http://B034901NT217:${port}`);
});