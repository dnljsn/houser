const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.createHouse)
app.delete('/api/houses/:id', controller.deleteHouse);

const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => { console.log(`You won $${port}!`); });