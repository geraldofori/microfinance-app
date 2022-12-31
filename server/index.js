const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const apiPort = 3005

const routes = require('./routes/routes')
const db = require('./db/database');

app.use(cors())
app.use(bodyParser.json())

app.use(routes);

const connection = mongoose.connect(db.uri, {
    useNewUrlParser: true, useUnifiedTopology: true });

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))