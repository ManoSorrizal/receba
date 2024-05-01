//variaveis de comunicação
const http = require('http'); //variável de definição do protocolo http.
const fs = require('fs'); //faz a busca do arqui de entrada e saída.

http.createServer(function(req, res){
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);