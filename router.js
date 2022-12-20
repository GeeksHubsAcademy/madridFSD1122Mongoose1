
//Importo método router() de la clase express
const router = require('express').Router();

const CarsRouter = require('./views/CarsRouter');

router.use("/cars", CarsRouter);

//Exporto router
module.exports = router;