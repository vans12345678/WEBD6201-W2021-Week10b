import express = require('express');
let router = express.Router();

/* GET home page. -default route*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home', user:''});
});
/* GET home page - home route*/
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home', user:'' });
});
/* GET about page - about route*/
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about', user:'' });
});
/* GET projects page - projects route*/
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects', user:'' });
});
/* GET services page - services route*/
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services', user:'' });
});
/* GET contact page - contact route*/
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page: 'contact', user:'' });
});
/* GET login page - login route*/
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login', user:'' });
});
/* GET register page - register route*/
router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Register', page: 'register' });
});

/* GET logout page - login route*/
router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Logout', page: 'logout', user:'' });
});


//Temp routing
/* GET contact-list page - contact-list route*/
router.get('/contact-list', function(req, res, next) {
  res.render('index', { title: 'Contact List', page: 'contact-list', user:'admin' });
});

/* GET edit page - edit route*/
router.get('/edit', function(req, res, next) {
  res.render('index', { title: 'Add', page: 'edit', user:'admin' });
});
/* GET edit page - edit route*/
router.get('/edit/:id', function(req, res, next) {
  let id = req.params.id;
  res.render('edit', { title: 'Edit', page: 'edit', contactID: id, user: 'admin' });
});
module.exports = router;
