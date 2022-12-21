
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const UsersController = require('../controllers/UsersController');

//Endpoints

router.get("/", UsersController.getAllUsers);
router.get("/:id", UsersController.getUserById);
router.get("/name/:name", UsersController.getUsersByName);

router.post("/", UsersController.newUser);
router.put("/", UsersController.updateUser);
router.delete("/", UsersController.deleteUser);

router.post("/login", UsersController.loginUser);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;