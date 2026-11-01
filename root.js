const http = require('http');

const formDetails = require('./formDetails.js');
const userData = require('./userData.js');

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {

        formDetails(req, res);

    } else if (req.url === '/submit' && req.method === 'POST') {

        userData(req, res);

    } else {

        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Page not found");

    }

});

server.listen(4600, () => {
    console.log("Server is running on port 4600");
});