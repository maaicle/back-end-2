const express = require('express');
const cors = require('cors');
const app = express();
const controller = require("./controller.js");

app.use(cors());
app.use(express.json());

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.createHouse);
app.put('/api/houses/:id', controller.updateHouse);
app.delete('/api/houses/:id', controller.deleteHouse);

app.listen(4004, () => console.log("Server is up on 4004"));