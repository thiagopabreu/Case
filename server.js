const express = require('express')
const consign = require('consign')
const cors = require('cors')

const app = express()
app.use(cors())
consign()
.include('controllers')
.into(app)

app.listen(3000, () => console.log('Conectado na porta 3000'))




