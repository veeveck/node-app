const express=require('express');
const server=express();
server.use(express.json());

const productRouter=require('./routes/productRoute');

server.use('/products',productRouter.routes);

server.listen(8080,()=>{
    console.log("Server started");
});
