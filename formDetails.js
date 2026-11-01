const fs = require('fs');

function formDetails(req, res) {

    fs.readFile("html/form.html", "utf-8", (err, data) => {

        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("Internal server error");
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);

    });

}

module.exports = formDetails;