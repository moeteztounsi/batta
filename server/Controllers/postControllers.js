const Post = require("../Models/postModel");
const asyncHandler = require("express-async-handler");


const savePost = asyncHandler(async(req,res)=>{

    const {name, deadline, price, description} = req.body;
 

    const postExists = await Post.findOne({image});
    
    if(postExists){
        res.status(400);
        throw new Error('Post Already Exists');
    }

    const post = await Post.create({
        name,
        deadline,
        price,
        description,
        image
    });

    if(post){
        res.status(201).json({
            _id: post._id,
            name: post.name, 
            price: post.price, 
            image: post.image,
            deadline: post.deadline,
            description: post.description
        });
    }else{
        res.status(400);
        throw new Error('Error');
    }
});

module.exports = {savePost};