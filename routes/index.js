var express = require('express');
var router = express.Router();
var Todo= require('../models/Todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello')
});

module.exports = router;
