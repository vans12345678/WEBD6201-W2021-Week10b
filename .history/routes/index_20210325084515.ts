import express = require('express');
let router = express.Router();

/* GET home page. -default route*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page - home route*/
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page - home route*/
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about' });
});
/* GET home page - home route*/
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects' });
});
/* GET home page - home route*/
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services' });
});
/* GET home page - home route*/
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page: 'contact' });
});
/* GET home page - home route*/
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login' });
});

module.exports = router;
