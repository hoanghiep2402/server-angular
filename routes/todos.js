const express = require('express');
const router = express.Router();
const Todos=require('../models/Todos');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Todos.find().then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })

});

module.exports = router;
