const express=require('express');
const path=require('path')
const bodyParser=require('body-parser')

//import routes
var app=express()

const logger=(req,res,next)=>{
    console.log('Request made to:' +req.url);
    next();
}

const users_routes =require('./routes/users');


//create server
const server = express();


server.use(express.json()); //middleware 

server.use(logger);

//link routes
server.use('/api/users', users_routes);

//test route
server.get('/',(req,res)=>{
    res.json({"API":'works'})
});

server.listen(3000,()=>{
    console.log('Server is running');
});