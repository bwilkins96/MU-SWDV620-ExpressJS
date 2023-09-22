// Creating an http server practice

const http = require('http');

function main() {
    const hostName = '127.0.0.1';
    const port = 5000;

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');

        // Route handling
        if (req.url === '/') {
            res.end('<h1>Hello!</h1>');
        } else {
            res.end(`<h1>${req.url.slice(1)}</h1>`);
        }
    });

    // Event listener
    server.on('connection', () => {
        console.log('new connection');
    })

    server.listen(port, hostName, () => {
        console.log(`Server is listening at http://${hostName}:${port}/`);
    });
}

main();