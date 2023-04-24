const fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const products=data.products;
const express=require('express');
const server=express();
server.use(express.json());
//POST
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.psuh(req.body);
    res.json(req.body);
});
//READ
server.get('/products',(req,res)=>{
    res.json(products);
});
//READ BY ID
server.get('/products/:id',(req,res)=>{
    const id=+req.params.id;
    const product=products.find(p=>p.id===id);
    res.json(product);
});

//UPDATE
server.put('/products/:id',(req,res)=>{
    const id=+req.params.id;
    const productIndex=products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json();
});
//PATCH
server.patch('/products/:id',(req,res)=>{
    const id=+req.params.id;
    const productIndex=products.findIndex(p=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
});
//DELETE
server.delete('/products/:id',(req,res)=>{
    const id=+req.params.id;
    const productIndex=products.findIndex(p=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1);
    res.status(201).json(product)
});



server.listen(8080,()=>{
    console.log("Server started");
});
