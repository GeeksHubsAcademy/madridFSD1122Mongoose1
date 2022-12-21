
//Importo método router() de la clase express
const router = require('express').Router();

const CarsRouter = require('./views/CarsRouter');
const UsersRouter = require('./views/UsersRouter');

router.use("/cars", CarsRouter);
router.use("/users", UsersRouter);

//Exporto router
module.exports = router;