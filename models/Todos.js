var mongoose = require('mongoose');

const TodosSchema= new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required:[true, 'Must Have Name']
    },
    time: {
        type: Date,
        required:[true, 'Must Have Date']
    },
    status: {
        type: Boolean,
        default: false
    }
});


const Todos = mongoose.model('Todos', TodosSchema);


module.exports = Todos ;

