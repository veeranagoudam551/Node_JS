const http = require('http');

const server = http.createServer((req, res) => {

    const html = `
        <html>
        <body>

            <h2>Student Registration</h2>

            <form action="/submit" method="POST">

                Name:
                <input type="text" name="username">
                <br><br>

                Email:
                <input type="email" name="email">
                <br><br>

                <button type="submit">Submit</button>

            </form>

        </body>
        </html>
    `;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(html);

});

server.listen(5500, () => {
    console.log("Server running on port 5500");
});