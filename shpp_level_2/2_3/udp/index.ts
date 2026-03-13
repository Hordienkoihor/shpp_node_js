import * as udp from 'dgram'
import  {createInterface} from "node:readline";
import type {RemoteInfo} from "node:dgram";

//server
const server = udp.createSocket('udp4');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});


const sPort = 3000;
const dPort = 3001;

// in case any error in server
server.on("error", (err) => {
    console.log(`server error: ${err.stack}`);
});

// listening port address is localhost
server.on("listening", () => {
    const address = server.address();
    console.log(`[SERVER] listening ${address.address}:${address.port}`);
});

// showing message
server.on("message", (msg:Buffer, info: RemoteInfo) => {
    const date = new Date(Date.now())
    console.log(`[SERVER] message from ${info.address} on ${info.port} event time ${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    console.log(`[SERVER] received text: ${msg.toString()}`);

    server.send(msg, info.port, info.address);
});

rl.on("line", (input: string) => {
    const message = Buffer.from(input);

    server.send(message, dPort, "127.0.0.1", (err) => {
        if (err) {
            console.error(`Error sending message: ${err.message}`);
        } else {
            console.log(`[SERVER] sent: ${input}`);
        }
    });
});

server.on("close", () => {
    console.log(`[SERVER] closed`);
})

server.bind(sPort);

