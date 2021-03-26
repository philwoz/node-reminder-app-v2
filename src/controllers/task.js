const Task = require('../model/task')

exports.signup = (req, res ) => {
    console.log("req.body", req.body)
    const task = new Task(req.body)

    URLSearchParams.save((err, task) => {
        if (err) {
            return res.status(400).json({
                error
            })
        }
        res.json({
            task
        })
    })
}