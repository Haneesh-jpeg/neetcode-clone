const express = require('express');

const app = express();

app.get("/",function(req,res){
    res.send("Hello");
    
})

app.get("/myname",function(req,res){
    res.send("<h1>Haneesh</h1>");
})

app.listen(3000,function(){
    console.log("Server running on https://localhost:3000");
})