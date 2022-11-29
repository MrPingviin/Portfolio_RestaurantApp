const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { Api } = require('@mui/icons-material');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/', express.static(`${path.resolve(__dirname + '/../dist/')}`))

app.get('/', (req, res) => {

    res.sendFile(path.resolve(`./index.html`))

})

app.get('/api', (req, res) => {
    const dataContainer = [];
    fs.readdir(`${__dirname + '/db/'}`, (err, files) => {
        files.forEach(file => {
            const newName = file.slice(0, file.length - 5);

            if (newName != "Bestsellers") {
                dataContainer.push(newName);
            }
        })

        res.send(dataContainer);
    })
})

app.get('/api/Bestsellers', (req, res) => {
    res.sendFile(`${__dirname + '/db/Bestsellers.json'}`);
})

app.get('/api/Burgers', (req, res) => {
    res.sendFile(`${__dirname + '/db/Burgers.json'}`);
})

app.get('/api/Salads', (req, res) => {
    res.sendFile(`${__dirname + '/db/Salads.json'}`);
})

app.get('/api/Chickens', (req, res) => {
    res.sendFile(`${__dirname + '/db/Chickens.json'}`);
})

app.get('/api/Colddrinks', (req, res) => {
    res.sendFile(`${__dirname + '/db/Colddrinks.json'}`);
})

app.get('/api/Teas', (req, res) => {
    res.sendFile(`${__dirname + '/db/Teas.json'}`);
})

app.post('/api/upload/Burgers', (req, res) => {

    const convertedData = JSON.stringify(req.body);

    fs.writeFileSync(`${path.resolve(__dirname + '/db/Burgers.json')}`, convertedData);
})

app.post('/api/upload/Chickens', (req, res) => {

    const convertedData = JSON.stringify(req.body);

    fs.writeFileSync(`${path.resolve(__dirname + '/db/Chickens.json')}`, convertedData);
})

app.post('/api/upload/Colddrinks', (req, res) => {

    const convertedData = JSON.stringify(req.body);

    fs.writeFileSync(`${path.resolve(__dirname + '/db/Colddrinks.json')}`, convertedData);
})

app.post('/api/upload/Salads', (req, res) => {

    const convertedData = JSON.stringify(req.body);

    fs.writeFileSync(`${path.resolve(__dirname + '/db/Salads.json')}`, convertedData);
})

app.post('/api/upload/Teas', (req, res) => {

    const convertedData = JSON.stringify(req.body);

    fs.writeFileSync(`${path.resolve(__dirname + '/db/Teas.json')}`, convertedData);
})


app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}!`);
})
