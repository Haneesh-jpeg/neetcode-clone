const courseModel = require('../models/courseModel');

module.exports.getAllCourses = async function(){
    return await courseModel.find({});
    
}

module.exports.createCourse = async function(courseInput){
    const course = new courseModel(courseInput);
    await course.save();   
}


module.exports.updateCourse = async function(courseId,updateInput){
    
    await courseModel.findOneAndUpdate({_id: courseId,updatedInput : updateInput})
}

module.exports.createFirstCourse = async function(){
    const courses = await courseModel.find({});
    if(courses && courses.length == 0){
        const firstCourseSetInput = {
            "title" : "bz DSA",
            "level" : "easy"
        };
        const course = new courseModel(firstCourseSetInput);
        await course.save();
    }
}