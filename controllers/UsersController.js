
const User = require('../models/user');

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

    let name = req.body.name;
    let surname = req.body.surname;
    let dni = req.body.dni;

    await User.create({
        name: name,
        surname: surname,
        dni: dni
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

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsersController;