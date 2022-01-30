const jwt = require('jsonwebtoken');
JWT_SECRET = "moetez1234";

const generateToken = (id)=>{

    return jwt.sign({id},JWT_SECRET,{expiresIn: "100000d",});


};



module.exports = generateToken;