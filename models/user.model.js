const mongoose = require('mongoose')
const uniqueValidator = require ('mongoose-unique-validator')

const Schema = mongoose.Schema
const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

let userSchema = new Schema({
    
    name : {
    type: String,
    max: 100,
},
    surname : {
        type : String,
        max: 100
},
    phone : {
    type : String,
    max: 100
},
    email: {
        type: String,
        required: [true, 'Email is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true,
        // validate:[validateEmail, 'Email address is not valid']
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email address is not valid']
},

    address : 
    {type : String,
        max: 100}
}, 
{

    collection: 'users',
    timestamps: true
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)