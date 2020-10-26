const http = require('http');
const url = require('url');  
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    var urlPath = url.parse(request.url).pathname;  
    if ('/' === urlPath)
    urlPath = '/index.html';

    fs.readFile(path.join(__dirname + urlPath), function(error, data) {  
        if (error) {  
            response.writeHead(404);  
            response.write(error);  
            response.end();  
        } else {  
            response.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
            response.write(data);  
            response.end();  
        }  
    });    
});  

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
