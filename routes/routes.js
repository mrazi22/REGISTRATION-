const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controller')

routes.post('/Register',controller.register)

module.exports = routes