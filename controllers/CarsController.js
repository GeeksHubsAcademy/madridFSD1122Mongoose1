
const Car = require('../models/car');

const CarsController = {};

CarsController.getAllCars = async (req, res) => {

    try {
        await Car.find({})
            .then(cars => {

                res.send(cars)
            })
    } catch (error) {
        console.log(error);
    }
}

CarsController.newCar = async (req, res) => {

    let name = req.body.name;
    let brand = req.body.brand;

    await Car.create({
        name: name,
        brand: brand
    }).then(car => {
        res.send(car)
    }).catch(error => {console.log(error)});

};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = CarsController;