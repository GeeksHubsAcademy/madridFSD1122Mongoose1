
//Importo método router() de la clase express
const router = require('express').Router();

const CarsRouter = require('./views/CarsRouter');
const UsersRouter = require('./views/UsersRouter');
const RentalsRouter = require('./views/RentalsRouter');

router.use("/cars", CarsRouter);
router.use("/users", UsersRouter);
router.use("/rentals", RentalsRouter);

//Exporto router
module.exports = router;