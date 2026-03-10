import * as net from 'net';

let server = net.createServer(function(socket) {
    socket.write('Success connection\r\n');
    socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');