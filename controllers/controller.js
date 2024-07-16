const createErrors = require('http-errors')
const User = require('../models/userModel')
const {authSchema} = require('../helpers/validationSchema')

module.exports = {
    register: async (req, res, next) => {
        try {
            //validate the request body
            const {name, email, password} = req.body
            await authSchema.validateAsync(req.body)

            //check if user already exists
            const existingUser = await User.findOne({email})

            if(existingUser) {
                throw createErrors.Conflict('User already exists')

            }

            //create new user
            const newUser = new User({
                name,
                email,
                password
            })
            await newUser.save()

            res.send('User created successfully')
        } catch (error) {
            next(error)
            
        }
    }
}