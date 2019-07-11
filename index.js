const http = require('http');

const PORT = process.env.PORT || 5000;
const TARGET_HOSTNAME = process.env.TARGET_HOSTNAME || 'pb.io';
const TARGET_PROTOCOL = process.env.TARGET_PROTOCOL || 'https';
const HTTP_STATUS_CODE = process.env.HTTP_STATUS_CODE || 302;

http.createServer((req, res) => {
    res.writeHead(HTTP_STATUS_CODE, { Location: `${TARGET_PROTOCOL}://${TARGET_HOSTNAME}${req.url}` });
    res.end();
}).listen(PORT);
