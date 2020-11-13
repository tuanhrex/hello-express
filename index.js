const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, SEI world');
});


app.get('/about', function(req, res) {
    res.send('This is the about page.')
});

app.get('/blog', (req, res) => {
    res.send('Welcomne to my blog');
})

app.listen(8000);