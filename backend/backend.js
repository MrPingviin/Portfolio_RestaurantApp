const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const url = require('url');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/', express.static(`${path.resolve(__dirname + '/../dist/')}`))

app.get('/', (req, res) => {

    res.sendFile(path.resolve(`./index.html`))

})

app.get('/api/best-sellers', (req, res) => {
    res.sendFile(`${__dirname + '/db/bestsellers.json'}`);
})

app.get('/api/burgers', (req, res) => {
    res.sendFile(`${__dirname + '/db/burgers.json'}`);
})

app.get('/api/salads', (req, res) => {
    res.sendFile(`${__dirname + '/db/salads.json'}`);
})

app.get('/api/chickens', (req, res) => {
    res.sendFile(`${__dirname + '/db/chickens.json'}`);
})

app.get('/api/coldDrinks', (req, res) => {
    res.sendFile(`${__dirname + '/db/colddrinks.json'}`);
})

app.get('/api/teas', (req, res) => {
    res.sendFile(`${__dirname + '/db/teas.json'}`);
})

app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}!`);
})