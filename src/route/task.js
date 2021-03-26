const express = require('express')
const router = express.Router()

const {signup} = require('../controllers/task')

router.post('/signup', signup)

module.exports = router