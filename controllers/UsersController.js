
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const authConfig = require('../config/auth');

const UsersController = {};

UsersController.getAllUsers = async (req, res) => {

    try {
        await User.find({})
            .then(users => {

                res.send(users)
            })
    } catch (error) {
        console.log(error);
    }
}

UsersController.getUserById = async (req, res) => {

    let id = req.params.id;

    try {

        await User.findById(id)
            .then(found => {
                res.send(found);
            })
            
    } catch (error){
        console.log(error);
    }   
}

UsersController.getUsersByName = async (req, res) => {

    let name = req.params.name;

    try {

        await User.find({
            name : name
        })
        .then(foundUsers => {
            res.send(foundUsers)
        })

    } catch (error) {
        console.log(error);
    }
}

UsersController.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    await User.create({
        name: req.body.name,
        surname: req.body.surname,
        dni: req.body.dni,
        email: req.body.email,
        password: password,
        phone: req.body.phone,
        nationality: req.body.nationality
    }).then(user => {
        res.send({"Message": `El usuario ${user.name} se ha añadido con éxito`})
    }).catch(error => {console.log(error)});

};

UsersController.updateUser = async (req, res) => {

    let dni = req.body.dni;
    let newName = req.body.name;
    let newSurname = req.body.surname;
    
    try {
        await User.findOneAndUpdate(
            //Query de búsqueda....
            {dni : dni}, 
            //Campos a cambiar
            {
                name: newName,
                surname: newSurname
        })
            
            //con setOptions en este caso voy a exigir que me devuelva el documento modificado
            .setOptions({ returnDocument: 'after' })
            .then(userModified => {
                res.send(userModified)
            })
    } catch (error) {
        console.log("Error updating user data", error);
    }
}

UsersController.deleteUser = async (req, res) => {
    let dni = req.body.dni;

    try {
        await User.findOneAndDelete({
            dni: dni
        })
            .then(erased => {
                res.send({"Message": `El usuario ${erased.name} ${erased.surname} se ha eliminado con éxito`})
            })
    } catch (error) {
        console.log("Error deleting user", error);
       
    }
};

UsersController.loginUser = async (req, res) => {

    try {

        await User.find({
            email: req.body.email
        })
        .then(userFound => {

            if(userFound[0].email === undefined ){
                //No hemos encontrado al usuario...mandamos un mensaje
                res.send("Usuario o password incorrecto");
            } else {
                //Hemos encontrado al usuario, vamos a ver si el pass es correcto

                if(bcrypt.compareSync(req.body.password, userFound[0].password)){

                    let token = jsonwebtoken.sign({ usuario: userFound }, authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    }); 

                    let loginOk = `Bienvenido de nuevo ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        //user: userFound,
                        token: token
                    })

                }else{

                    res.send("Usuario o password incorrecto");
                }
            }

        })

    } catch (error) {
        res.send("Email o password incorrectos");
    }
}

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsersController;