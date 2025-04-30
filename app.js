var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end("OK!");

    //  res.end("OK!");
})
.listen(3000);

// To run node, use node <filename>, ei. node app.js.