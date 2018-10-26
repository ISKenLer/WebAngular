const express = require('express');

const jsonParser = require('body-parser').json();

const app = express();

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Tyle, X-Requested-With');
    next();
}); 

app.get('/', (_req, res) => res.send('Hello'));

app.post('/signin', jsonParser, (req, res) => {
    res.send(req.body);
});

app.listen(3000,() => console.log('Server is running!')); //Mở cổng post 3000