var mongoose = require('mongoose');

const TodosSchema= new mongoose.Schema({
    id: String,
    name: String,
    time: Date,
    status: Boolean
});


const Todos = mongoose.model('Tank', TodosSchema);


module.exports = Todos ;

