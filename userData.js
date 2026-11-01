function userData(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end("<h1>Form submitted successfully!</h1>");

}

module.exports = userData;