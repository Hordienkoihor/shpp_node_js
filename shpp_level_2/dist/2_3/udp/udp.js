import * as udp from 'dgram';
import { createInterface } from "node:readline";
const server = udp.createSocket('udp4');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
if (!process.argv[2] || !process.argv[3]) {
    throw new Error("pls enter source and destination port");
}
const sPort = process.argv[2];
const dPort = process.argv[3];
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
server.on("message", (msg, info) => {
    console.log(`message from ${info.address} on ${info.port} \n${msg}`);
});
// assing any port
server.bind(3333);
//# sourceMappingURL=udp.js.map