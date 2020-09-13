const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commenter: {
        type: String,
        required: true
    },
    title: {
        type: String,
        
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required:true
    }

})



const articleSchema = new mongoose.Schema({
    //one product's json
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        
    },
    comments : [commentSchema]
});

mongoose.model('Article', articleSchema)

