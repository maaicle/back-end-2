const database = require('./db.json');
let nextId = 4;


module.exports = {
    getHouses: (req, res) => { 
        res.status(200).send(database);
        console.log("getHouses");
    },

    deleteHouse: (req, res) => {
        let id = +req.params.id;
        let index = database.findIndex(ele => ele.id === id);
        database.splice(index, 1);
        // console.log(id, index, database);
        res.status(200).send(database);
    },

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;
        let newHouse = {
            id: nextId,
            address: address,
            price: +price,
            imageURL: imageURL
        };
        console.log(newHouse);
        database.push(newHouse);
        nextId++;
        res.status(200).send(database);
    },

    updateHouse: (req, res) => {
        let id = Number(req.params.id);
        let type = req.body.type;
        let index = database.findIndex(ele => ele.id === id);
        if (database[index].price === 0 && type === 'minus') {
            res.status(400).send("Price can't go below $0");
        } else if (database[index].price <= 9999 && type === 'minus') {
            database[index].price = 0;
        } else if (type === 'minus') {
            database[index].price -= 10000;
        } else if (type === 'plus') {
            database[index].price += 10000;
        };
        res.status(200).send(database);
    }
};