var mongoose = require('mongoose');

const TodoSchema= new mongoose.Schema({
    id: String,
    name: String,
    time: Date,
});


var Todo= mongoose.model('Tank', TodoSchema);



module.exports =Todo;

