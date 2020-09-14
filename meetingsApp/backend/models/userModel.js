const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //one product's json
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // ,
    // teams: {
    //     type: [String],
    //     required: true
    // },
    // meetings: {
    //     type: [String],
    //     required: true
        
    // }
});

mongoose.model('User', userSchema)

