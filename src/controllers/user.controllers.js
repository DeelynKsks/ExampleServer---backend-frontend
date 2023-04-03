const ctrluser = {}

ctrluser.showUser = async (req, res) => {
    const {nombre, apellido, edad, dni} = req.body

    const data = {
        name: nombre,
        surname: apellido,
        age: edad,
        DNI: dni
    }

    res.json({
        msg: "Acá están tus datos, tomá:",
        "Datos de usuario": data
    })
}

module.exports = ctrluser