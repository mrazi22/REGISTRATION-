const joi = require('joi')


const authSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required().min(6)
})

module.exports = {authSchema}