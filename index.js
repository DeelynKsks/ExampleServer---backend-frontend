const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(express.static('public'))

app.use(require("./src/routes/user.routes"))

const port = 7000
app.listen(port, () => console.log(
    `Servidor corriendo en: http://localhost:${port}`
))