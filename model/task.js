const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema ({
    name: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32,
    },
    id: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model("Task", taskSchema)