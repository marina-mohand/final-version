var mongoose = require('mongoose');

var lessonSchema = mongoose.Schema({
    lessonTitle : {type:String,required:true},
    lessonDescription : {type:String, required : true},
    idProf:{type:String, required : true},
    lessonContenu : {type:String, required : true},
});

var lesson = module.exports = mongoose.model('lesson',lessonSchema);