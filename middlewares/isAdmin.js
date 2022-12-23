
module.exports = async (req, res, next) => {
    console.log(req.user)
    if(req.user && req.user.rol == "admin"){
        next();
    }else {
        res.status(401).send(`Forbidden access`)
    }
};


// //Importo ../models/usuario' y lo asigno al modelo Usuario
// const  User  = require('../models/user.js');

// //Exporto la función middleware
// module.exports = (req, res, next) => {
//     //Capturo la id de usuario que nos llega por body
//     let _id = req.body._id;

//     //Busco en la tabla Usuario..
//     User.find({
//         //..un usuario con esa id
//          _id : _id 
//         //Si lo encuentro..
//     }).then(foundUser => {
//         //..y su rol es admin...
//         if(foundUser[0].rol == "admin"){
//             //..finaliza el middleware y continuará ejecutando el endpoint donde lo pongamos
//             next();
//             //Si no es admin solo mostrará un mensaje y ese endpoint no se ejecuta
//         }else {
//             res.send(`Forbidden access`)
//         }
//     }).catch(error => {
//         res.send(`Introduce a valid user id`)
//     })

// };