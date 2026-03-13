import udp from "dgram";
import { createInterface } from "node:readline";
const client = udp.createSocket('udp4');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const clientsPort = 3001;
const clientdPort = 3000;
let start, end;
let sentText;
// in case any error in server
client.on("error", (err) => {
    console.log(`client error: ${err.stack}`);
});
// listening port address is localhost
client.on("listening", () => {
    const address = client.address();
    console.log(`[CLIENT] listening ${address.address}:${address.port}`);
});
// showing message
client.on("message", (msg, info) => {
    end = Date.now();
    console.log(`[CLIENT] response from ${info.address} on ${info.port}\n`);
    console.log(`is the message the same? ${(msg.toString() === sentText)}`);
    console.log(`required time: ${new Date(end).getMilliseconds() - new Date(start).getMilliseconds()}ms`);
});
rl.on("line", (input) => {
    const message = Buffer.from(input);
    client.send(message, clientdPort, "127.0.0.1", (err) => {
        if (err) {
            console.error(`Error sending message: ${err.message}`);
        }
        else {
            start = Date.now();
            sentText = input;
            console.log(`[CLIENT] sent: ${input}`);
        }
    });
});
client.bind(clientsPort);
//# sourceMappingURL=index.js.map