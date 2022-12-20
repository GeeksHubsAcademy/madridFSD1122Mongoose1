
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
        res.send({"Message": `El coche ${car.name} se ha añadido con éxito`})
    }).catch(error => {console.log(error)});

};

CarsController.updateCar = async (req, res) => {

    let id = req.body.id;
    let newName = req.body.name;
    
    try {
        await Car.findByIdAndUpdate(id, {
            $set: {
                name: newName,
            }
        }).setOptions({ returnDocument: 'after' })
            .then(carModified => {
                res.send(carModified)
            })
    } catch (error) {
        console.log("Error updating car name", error);
    }
}

CarsController.deleteCar = async (req, res) => {
    let id = req.body.id;

    try {
        await Car.findByIdAndDelete(id)
            .then(coche => {
                res.send({"Message": `El coche ${coche.name} se ha eliminado con éxito`})
            })
    } catch (error) {
        console.log("Error deleting car", error);
       
    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = CarsController;