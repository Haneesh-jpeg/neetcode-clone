const express = require('express');

const app = express();

app.use(express.static("frontend"));

// app.get('/html',function(req,res){
//     res.sendFile(__dirname + "/frontend/index.html");   
// })

app.get("/",function(req,res){
    res.send("Hello");
    
})

// app.get("/myname",function(req,res){
//     res.send("<h1>Haneesh</h1>");
// })



app.listen(3000,function(){
    console.log("Server running on https://localhost:3000");
})