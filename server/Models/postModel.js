const mongoose = require("mongoose");



const postSchema = mongoose.Schema({

    id:{   
        type: Number,
        required: false,

    },

    name :{
        type: String,
        required: true,
    },

    image:{
        type: String,
        required: true  
    },

    description:{
        type: String,
        required: true,

    },

    price:{
        type: mongoose.SchemaTypes.Decimal128,
        required: true,
    },

    deadline: {
        type: String,
        required: true,
    }
},{timestamps :true})


const Post = mongoose.model("Post", postSchema);

module.exports = Post;