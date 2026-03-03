let counter = 0
const express = require('express');
const app = express();
const port = 3000;

function querySum(sum, num) {
    return sum += Number(num);
}

app.get('/hello', (req, res) => {
    res.send(`
<h1>${counter++}</h1>
<h1>${Object.values(req.query).reduce(querySum, 0)}</h1>
`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})