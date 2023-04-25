const express=require('express');
const server=express();
server.use(express.json());

const productRouter=require('./routes/productRoute');
const userRouter=require('./routes/userRoute');
server.use('/products',productRouter.routes);
server.use('/users',userRouter.routes);
server.listen(8080,()=>{
    console.log("Server started");
});
