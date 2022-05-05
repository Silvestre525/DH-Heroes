const express = require('express');
const path = require("path");
const app = express()

//Ejemplo utilizando modulos de terceros 
app.use(express.static('public'));

app.listen(3030, () => {
    console.log("servidor corriendo en puerto 3030");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
})  //dirname es la direccion de dh-heroes en este caso en nuestra computadora 

app.get("/babbage", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/babbage.html"));
})

app.get("/berners-lee" , (req,res) => {
    res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
})

app.get("/clarke", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/clarke.html"))
})


app.get("/hopper", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/hopper.html"))
})

app.get("/lovelace", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/lovelace.html"))
})

app.get("/turing", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/turing.html"))
})

app.get("/hamilton", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/hamilton.html"))
})
