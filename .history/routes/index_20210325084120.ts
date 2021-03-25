import express = require('express');
let router = express.Router();

/* GET home page. -default route*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page - home route*/
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page - home route*/
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
/* GET home page - home route*/
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET home page - home route*/
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
/* GET home page - home route*/
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
/* GET home page - home route*/
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

module.exports = router;
