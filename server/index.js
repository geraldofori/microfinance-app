const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3005

const db = require('./db')
const routes = require('./routes/routes')


app.use(cors())
app.use(bodyParser.json())

app.use(routes);
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))