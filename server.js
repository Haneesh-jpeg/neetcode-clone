const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const courseLib = require('./backend/lib/courseLib');
dotenv.config();

const app = express();


app.use(express.static("frontend"));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
    
})

mongoose.set("strictQuery",false);

mongoose.connect(process.env.MONGO_CONNECTION_STRING,async function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("DB  Connection Succesfully");
        await courseLib.createFirstCourse();
        const courses = await courseLib.getAllCourses();
        console.log(courses);
        app.listen(3000, function () {
            console.log("Server running on https://localhost:3000");
        })
    }
})