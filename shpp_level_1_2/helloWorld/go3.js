const fs = require('fs');

function readHttpLikeInput() {
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for (; ;) {
        try {
            fs.readSync(0 /*stdin fd*/, buffer, 0, 1);
        } catch (e) {
            break; /* windows */
        }
        if (buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10)
                break;
            was10++;
        } else
            was10 = 0;
        res += new String(buffer);
    }

    return res;
}

function parseTcpStringAsHttpRequest(string) {
    function reducer(accum, header) {
        let value = header
            .trim()
            .split(":")
            .map(str => str.trim())

        accum[value[0]] = value[1];
        return accum;
    }

    let arr = string.split("\n").filter(x => x !== "");

    let [method, uri, version] = arr[0].split(" ")
    let headers = arr.slice(1, -1).reduce(reducer, {})
    let bode = arr[arr.length - 1]

    return {
        method: method,
        uri: uri,
        headers: headers,
        body: bode,
    };
}

let contents = readHttpLikeInput();

function outputHttpResponse(statusCode, statusMessage, headers, body) {
    const res = `HTTP/1.1 ${statusCode} ${statusMessage}
Server: Apache/2.2.14 (Win32)
Connection: Closed
Content-Type: text/html; charset=utf-8
Content-Length: ${body.length}

${body}`
    console.log(res)
    return res;
}

function processHttpRequest($method, $uri, $headers, $body) {
    function badRequest() {
        outputHttpResponse(400, 'BAD REQUEST', $headers, `bad request`);
    }

    function notFound() {
        outputHttpResponse(404, 'NOT FOUND', $headers, `not found`);
    }

    const startsWithSum = /^(\/sum)/
    const requiredUri = /\/sum\?nums=\d+,\d+/
    const requiredMethod = /GET/

    if (!requiredMethod.test($method)) {
        return badRequest();
    }

    if (!startsWithSum.test($uri)) {
        return notFound();
    } else if (!requiredUri.test($uri)) {
        return notFound();
    }

    const sum = $uri
        .substring($uri.indexOf("=") + 1, $uri.length)
        .split(",")
        .reduce((accum, val) => {
            accum += Number(val);
            return accum
        }, 0)

    return outputHttpResponse(200, 'OK', $headers, `${sum}`);
}

http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
