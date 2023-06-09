const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    edad: {
        required: true,
        type: Number
    },
    telefono: {
        required: true,
        type: String
    },
    direccion: {
        required: true,
        type: String
    },
    dni: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)
