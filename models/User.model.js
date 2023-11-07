const mongoose = require('mongoose')
const Schema = mondoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('users', userSchema)