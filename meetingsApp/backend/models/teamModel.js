const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    //one product's json
    name: {
        type: String,
        required: true
    },
    tagname: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    members: {
        type: [String],
        required: true
    },
    meetings: {
        type: [String],
        required: true        
    }
});

mongoose.model('Team', teamSchema)

