
const Rental = require('../models/rental');

// const jsonwebtoken = require('jsonwebtoken');

// const authConfig = require('../config/auth');

const RentalsController = {};


RentalsController.getAllRentals = async (req, res) => {

    try {

        let result = await Rental.find({})
            .populate('userId')
            .populate('carId');

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún alquiler." })
        }

    } catch (error) {
        console.log(error);
    }
}


RentalsController.newRental = async (req, res) => {

    try {

        let user = await Rental.create({
            userId: req.body.userId,
            carId: req.body.carId,
            fechaInicio: req.body.fechaInicio,
            fechaFin: req.body.fechaFin,
            importe: req.body.importe
        })

        if (user) {

            res.send({ "Message": `Su coche se ha alquilado con éxito` });

        }else {

            res.send({ "Message": `Ha habido un error en el alquiler` });

        }

    } catch (error) {
        console.log(error)
    }

};


//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = RentalsController;