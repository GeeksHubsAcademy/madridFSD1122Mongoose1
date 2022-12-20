
//Importo clase express
const express=require('express');
//Importo métodos de express
const app=express();

const dbconnect = require("./db/dbconnect");

const PORT = 5500;

// //Endpoints
// app.get("/", (req,res)=> res.send({"coworking": "talent garden"}))

//Me conecto a la base de datos
dbconnect();


//levanto la API
app.listen(PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))