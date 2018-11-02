module.exports = {

    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(err => {
                res.status(500).send(err);
            })
        // res.status(200).send('It works!');
    },
    createHouse: (req, res, next) => {
        const newHouse = req.body.addHouse;
        console.log(newHouse)
        const dbInstance = req.app.get('db');

        // res.status(200).send('Everything is fine.')

        dbInstance.create_house(newHouse)
            .then((response) => {
                console.log(response)
                res.sendStatus(200)
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
ç
        dbInstance.delete_house([params.id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send(err);
            });
    }
} 