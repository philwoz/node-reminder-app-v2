const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')

const taskRoute = require('./src/route/task')

const exp = express()

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log("DB connected"))

//middleware
exp.use(bodyParser.json())
exp.use(bodyParser.urlencoded({extended: false}))

//route middleware
exp.use('/api', taskRoute)

const port = process.env.PORT || 8000

exp.listen(port, () => {
    console.log(`server is running on port ${port}`)
})