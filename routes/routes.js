const express = require("express");
const router = express.Router();

const Model = require("../model/model");

module.exports = router;

//INSERTAR DATOS.
router.post('/post', async (req, res) => {
    const data = new Model({
        nombre: req.body.nombre,
        edad: req.body.edad,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        dni: req.body.dni
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//OBTENER DATOS.
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//OBTENER POR ID.
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//ACTUALIZAR POR ID.
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//ELIMINAR POR ID.
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`El registro de nombre: ${data.nombre} fue eliminado...`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})