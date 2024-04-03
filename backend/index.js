const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db/db');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000


// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

// Conexion a la DB
connectDB()

//Rutas



app.get('/', (req, res) => {
  res.json({msg: "Api conectada"})
})


// Inciar servidor
app.listen(PORT, () => {
  console.log(`Servidor conectado en http://localhost:${PORT}`)
})