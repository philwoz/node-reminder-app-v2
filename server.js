const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')

require('dotenv').config()

const taskRoute = require('./route/task')

const app = express()

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log("DB connected"))

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//route middleware
app.use('/api', taskRoute)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})