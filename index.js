const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, SEI world');
})

app.listen(8000);