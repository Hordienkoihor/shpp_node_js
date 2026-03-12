import * as udp from 'dgram'
import  {createInterface} from "node:readline";
import type {RemoteInfo} from "node:dgram";


const server = udp.createSocket('udp4');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

if (!process.argv[2] || !process.argv[3]) {
    throw new Error("pls enter source and destination port");
}
const sPort = Number(process.argv[2]);
const dPort = Number(process.argv[3]);

// in case any error in server
server.on("error", (err) => {
    console.log(`server error: ${err.stack}`);
});

// listening port address is localhost
server.on("listening", () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

// showing message
server.on("message", (msg:Buffer, info: RemoteInfo) => {
    console.log(`message from ${info.address} on ${info.port} \n${msg}`);
});

rl.on("line", (input: string) => {
    const message = Buffer.from(input);

    server.send(message, dPort, "127.0.0.1", (err) => {
        if (err) {
            console.error(`Error sending message: ${err.message}`);
        } else {
            console.log(`[You]: ${input}`);
        }
    });
});

// assing any port
server.bind(sPort);
