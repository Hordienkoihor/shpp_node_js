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

let contents = readHttpLikeInput();

// ось цю функцію, власне, і треба написати
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

http = parseTcpStringAsHttpRequest(contents);
console.log(JSON.stringify(http, undefined, 2));