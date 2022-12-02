var  mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    nom:{type:String, required:true},
    prenom:{type:String, required:true},
    mail:{type:String, required:true},
    password:{type:String, required:true},
    choice:{type:String, required:true},
});

var User = module.exports = mongoose.model('User', userSchema);