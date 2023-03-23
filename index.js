const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const string = "mongodb://127.0.0.1:27017/api_test"
mongoose.connect(string);

const db = mongoose.connection;
db.on("error",(error) => {
    console.log(error)
})

db.once("conectado", () =>{
    console.log("Conexión exitosa!")
})


const app  = express();
app.use(express.json());
app.use("/api",routes);


app.listen(3000, () =>{
    console.log(`Servidor corriendo en el puerto ${3000}`);
});

