
const Car = require('../models/car');

const CarsController = {};

CarsController.getAllCars = async (req, res) => {

    try {
        let cars = await Car.find({});

        if(cars.length > 0){
            res.send(cars)
        } else {
            res.send({"Message":"Lo sentimos, no hemos encontrado ningún coche."})
        }

    } catch (error) {
        console.log(error);
    }
}

CarsController.newCar = async (req, res) => {

    let name = req.body.name;
    let brand = req.body.brand;   

    try {

        let result = await Car.create({name: name, brand: brand})

        if(result?.name){
            res.send({"Message": `El coche ${result.name} se ha añadido con éxito`})
        }

    } catch (error) {
        console.log(error)
    }
        
};

CarsController.updateCar = async (req, res) => {

    let id = req.body.id;
    let newName = req.body.name;
    let newBrand = req.body.brand;
    
    try {

        let result = await Car.findByIdAndUpdate(id, {
            $set: {
                name: newName,
                brand: newBrand
            }
        }).setOptions({ returnDocument: 'after' })

        if(result?.name){
            res.send(result)
        }

    } catch (error) {
        console.log("Error updating car name", error);
    }
}

CarsController.deleteCar = async (req, res) => {
    let id = req.body.id;

    try {
        
        let result = await Car.findByIdAndDelete(id);

        res.send({"Message": `El coche ${result.name} se ha eliminado con éxito`})
        
    } catch (error) {
        console.log("Error deleting car", error);
       
    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = CarsController;