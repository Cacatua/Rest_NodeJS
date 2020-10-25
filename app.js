const express = require('express');

const app = express();

//ROUTES
app.get('/', (req,res) => {
    res.send('We are')
});

app.get('/teste', (req,res) => {
    res.send('We are2')
});

app.listen(3000);