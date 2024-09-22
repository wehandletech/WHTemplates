const { exec } = require('child_process');
const httpServer = require('http-server');

// Start the HTTP server
const server = httpServer.createServer({ root: './' });
server.listen(8080, () => {
    console.log('HTTP server is running on http://localhost:8080');

    // Open the default web browser
    const start = (process.platform === 'darwin' ? 'open' :
                   process.platform === 'win32' ? 'start' :
                   'xdg-open');
    exec(`${start} http://localhost:8080`);
});
