
// Importar a biblioteca que use o protocolo http e URL
const http = require('http');
const url  = require('url');
const fs   = require('fs');

function readFile(response, file) {
    fs.readFile(file, function(err, data) {
        response.end(data);
    });
}

// Criar uma função para trabalhar no servidor
var callback = function (request, response) {
    var parts = url.parse(request.url);
    var path  = parts.path;
    if (parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "apresentacao.html");
    }else if (parts.path == "/abertura/tipoDocx"){
        response.writeHead(200, {"Content-type": "text/plain"});
        readFile(response, "arquivo.docx");
    } else if (parts.path == "/abertura/tipoJpeg"){
        response.writeHead(200, {"Content-type": "image/jpeg"});
        readFile(response, "arquivo.jpeg");
    } else if (parts.path == "/abertura/tipoMp3"){
        response.writeHead(200, {"Content-type": "audio/mp3"});
        readFile(response, "arquivo.mp3");
    } else if (parts.path == "/abertura/tipoMp4"){
        response.writeHead(200, {"Content-type": "video/mp4"});
        readFile(response, "arquivo.mp4");
    } else if (parts.path == "/abertura/tipoJson"){
        response.writeHead(200, {"Content-type": "application/json"});
        readFile(response, "arquivo.json");
    } else if (parts.path == "/abertura/tipoMd"){
        response.writeHead(200, {"Content-type": "text/md"});
        readFile(response, "./arquivo.md");
    } else {
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "Site404.html");
    }
};

// Criar o servidor ------------------------------------------------------------
var server = http.createServer(callback)
server.listen(3000);
console.log("[SERVER - OK] ... Servidor montado em http://localhost:3000");



