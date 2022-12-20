
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const CarsController = require('../controllers/CarsController');

//Endpoints

router.get("/", CarsController.getAllCars);
router.post("/", CarsController.newCar);



//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;