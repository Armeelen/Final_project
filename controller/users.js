//link the controller with the models
users = require('../models/users');

exports.login = async(request, reply) =>{
    Users.findOne({
        where:{
            username:request.body.username,
            password:request.body.password
        }
    })
    .then((user)=>{
        if(user){
        reply.json({"message":"Login Sucessful"});
        }
        else{
            reply.json({"message":"Invalid Credentials"})
        }
    })
    .catch((error)=>{
        reply.json({"message":error})
    });
};

exports.register = async(request, reply) =>{
    Users.create({
        id:request.body.id,
        username: request.body.username,
        password:request.body.password,
        type:request.body.type,
    })
    .then((user)=>{
        reply.json({"message":"User created"});
    })
    .catch((error)=>{
        reply.json({"message":error})
    });

};

