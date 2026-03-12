import * as net from 'net';
let server = net.createServer(function (socket) {
    socket.write('Success connection\r\n');
    socket.pipe(socket);
    const ip = socket.remoteAddress;
    const time = Date.now();
    console.log('ip: ' + ip);
    console.log('time: ' + time);
    socket.on('end', (socket) => {
        console.log('close initialised');
    });
    socket.on('close', (socket) => {
        console.log('connection closed');
    });
});
server.listen(1337, '127.0.0.1');
//# sourceMappingURL=index.js.map