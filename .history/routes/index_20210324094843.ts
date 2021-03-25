import express = require('express');
let router = express.Router();

/* GET home page. -default route*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page - home route*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
