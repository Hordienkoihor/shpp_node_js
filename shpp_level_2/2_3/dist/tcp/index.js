import * as net from 'net';
//server
let server = net.createServer(function (socket) {
    console.log('success connect ');
    socket.pipe(socket);
    const ip = socket.remoteAddress;
    const time = Date.now();
    console.log('ip: ' + ip);
    console.log('time: ' + time);
    server.on('data', function (chunk) {
        const message = chunk.toString();
        console.log('message from client' + message);
        console.log('time : ' + Date.now());
        socket.write(message);
    });
    socket.on('end', () => {
        console.log('close initialised');
    });
    socket.on('close', () => {
        console.log('connection closed');
    });
});
server.listen(1337, '127.0.0.1');
//client
const message = "hello server";
const port = 1337;
const ip = '127.0.0.1';
let start, end;
const client = new net.Socket();
client.connect(port, ip, () => {
    console.log('CLIENT: connecting');
    start = Date.now();
    client.write(message);
});
client.on('data', (data) => {
    end = Date.now();
    console.log('is the message same?' + (data.toString() === message));
    console.log('required time: ' + (end - start));
    client.end();
});
//# sourceMappingURL=index.js.map